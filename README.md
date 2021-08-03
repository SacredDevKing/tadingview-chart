# TradingView jsapi Binance (charting_library)

This is an out-of-the-box Vuejs TradingView charting integration. With a connected JS API provider.

**Updated with сharting_library v19.x**

![tradingview-charting-library-vuejs-jsapi-example](/docs/chart.jpg)

## Articles

* [Connecting and settings TradingView with JS API and UDF adapter - Medium.com](https://medium.com/marcius-studio/connecting-and-settings-tradingview-with-js-api-and-udf-adapter-b790297a31fa)
* [Financial charts for your application - Medium.com](https://medium.com/marcius-studio/financial-charts-for-your-application-cfcceb147786)

## Before begin

The Charting Library is free, but its code is in the private repository on GitHub.
Make sure that you have access to this repository: <https://github.com/tradingview/charting_library/>.

If you see 404 error page, then you need to request access to this repository at <https://tradingview.com/HTML5-stock-forex-bitcoin-charting-library/?feature=technical-analysis-charts> and click on the `Get Library` button.

## Features

**Client-side**

* [x] Vuejs 2.x
* [x] @vue/cli-service (Webpack 4, SASS/SCSS)

**Server-side**

* [x] Fastifyjs
* [x] fastify-http-proxy

## Install

1. Download [charting_library](https://github.com/tradingview/charting_library) or `git clone https://github.com/tradingview/charting_library.git`
2. Copy `charting_library` + `datafeeds` to `/public/charting_library/` folder.

*If you get 404 then you need to [request an access to this repository](https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/?feature=technical-analysis-charts).*

## Commands

```bash
# client\package.json
$ yarn serve
$ yarn build

# server\package.json
$ yarn dev
```

## What is Charting Library

Charting Library is a standalone solution for displaying charts. This free, downloadable library is hosted on your servers and is connected to your data feed to be used in your website or app. [Learn more and download](https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/?feature=technical-analysis-charts).

## What is Vuejs

Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.

## Contributors

<a href="https://github.com/marcius-studio">
<img src="https://raw.githubusercontent.com/marcius-studio/storage/master/badge-marcius-studio.svg" height="60">
</a>
