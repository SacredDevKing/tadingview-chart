import api from '@marcius-capital/binance-api'


export const getExchangeServerTime = () => {
	return api.rest.time().then(res => res.serverTime)
}

export const getSymbols = () => {
	return api.rest.exchangeInfo().then(res => res.symbols)
}

const formatingKline = (data) => {
	const val = Array.isArray(data) ? data : [data]
	return val.map(i => ({
		time: i.openTime / 1000,
		open: i.open,
		high: i.high,
		low: i.low,
		close: i.close,
		volume: i.volume,
	}))
}

export const getKlines = (symbol, interval, startTime, endTime, limit = 500) => {
	return api.rest.klines({ symbol: symbol.toUpperCase(), interval })
		.then(res => formatingKline(res))
}


export const subscribeKline = ({ symbol, interval, uniqueID }, callback) => {
	return api.stream.kline({ symbol, interval, uniqueID }, res => {
		const candle = formatingKline(res)
		callback(candle[0]) // [0] - formatingKline return Array, need Object in subscribeBars
	})
}

export const unsubscribeKline = (uniqueID) => {
	return api.stream.close.kline({ uniqueID })
}


export const interval = {
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
