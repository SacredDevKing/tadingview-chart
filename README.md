# TradingView Charting Library, Vue.js and JSAPI Integration Example

**Exchange:** Binance

**NOTE**: For Chrome Browser need add params `-incognito -private chromium-browser --disable-web-security --user-data-dir="C:/Chrome dev session"`. Because [binance-api](https://www.npmjs.com/package/@marcius-capital/binance-api) makes request directly from browser to exchange. Chrome, for security reasons, prohibits making such requests. 

An alternative solution is to use proxy. Until this feature is added.

![tradingview-charting-library-vuejs-jsapi-example](/docs/chart.jpg)

## How to start

1. Install dependencies `npm install`.
2. Copy `charting_library` folder from https://github.com/tradingview/charting_library/ to `/public` folder. The earliest supported version of the Charting Library is 1.12. If you get 404 then you need to [request an access to this repository](https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/).
3. Run `npm run serve`. It will build the project and open a default browser with the Charting Library.

## What is Charting Library

Charting Library is a standalone solution for displaying charts. This free, downloadable library is hosted on your servers and is connected to your data feed to be used in your website or app. [Learn more and download](https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/).

## What is Vue.js

Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.

## About This Project

This project was bootstrapped with [Vue CLI](https://cli.vuejs.org/).
