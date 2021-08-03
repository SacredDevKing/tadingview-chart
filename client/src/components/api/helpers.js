import api from '@marcius-capital/binance-api'
import axios from 'axios'

const intervals = {
	'1': '1m',
	'3': '3m',
	'5': '5m',
	'15': '15m',
	'30': '30m',
	'60': '1h',
	'120': '2h',
	'240': '4h',
	'360': '6h',
	'480': '8h',
	'720': '12h',
	'D': '1d',
	'1D': '1d',
	'3D': '3d',
	'W': '1w',
	'1W': '1w',
	'M': '1M',
	'1M': '1M',
}

export const getExchangeServerTime = () => request('/time').then(res => res.serverTime)

export const getSymbols = () => request('/exchangeInfo').then(res => res.symbols)

// https://binance-docs.github.io/apidocs/spot/en/#kline-candlestick-data
export const getKlines = ({ symbol, interval, from, to }) => {
	interval = intervals[interval] // set interval

	from *= 1000
	to *= 1000

	return request('/klines', { symbol: symbol.toUpperCase(), interval, startTime: from, endTime: to })
		.then(res => {
			return res.map(i => ({
				time: parseFloat(i[0]),
				open: parseFloat(i[1]),
				high: parseFloat(i[2]),
				low: parseFloat(i[3]),
				close: parseFloat(i[4]),
				volume: parseFloat(i[5]),
			}))
		})
}

export const subscribeKline = ({ symbol, interval, uniqueID }, callback) => {
	interval = intervals[interval] // set interval
	return api.stream.kline({ symbol, interval, uniqueID }, res => {
		const candle = formatingKline(res.kline)
		callback(candle)
	})
}

export const unsubscribeKline = (uniqueID) => {
	return api.stream.close.kline({ uniqueID })
}

export const checkInterval = (interval) => !!intervals[interval]

// helpers ------------------------

function formatingKline({ openTime, open, high, low, close, volume }) {
	return {
		time: openTime,
		open,
		high,
		low,
		close,
		volume,
	}
}

function request(url, params = {}) {
	return axios({
		baseURL: 'http://localhost:3000/',
		method: 'get',
		url,
		params
	})
		.then(res => res.data)
		.catch(res => console.log(res))
}

function candle(i) {
	return {
		o: parseFloat(i[1]),
		h: parseFloat(i[2]),
		l: parseFloat(i[3]),
		c: parseFloat(i[4]),
		v: parseFloat(i[5]),
		ts: i[0],
		price: parseFloat(i[4]),
		openTime: i[0],
		closeTime: i[6],
		trades: i[8]
	}
}