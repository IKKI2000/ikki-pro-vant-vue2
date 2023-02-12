<template>
    <div id="app">
        <van-overlay :show="$store.state.loading">
            <van-loading vertical type="spinner" :color="$utils.less.primaryColor" size="60" :text-color="$utils.less.primaryColor" text-size="24">{{ $t('Common.Loading') }}</van-loading>
        </van-overlay>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'AppView',
    };
</script>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        > .van-overlay {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    #nprogress {
        .bar {
            height: 3px !important;
            background: @green !important;
            .peg {
                box-shadow: 0 0 10px @green, 0 0 5px @green;
            }
        }
        .spinner {
            top: 8px !important;
            right: 8px !important;
            .spinner-icon {
                border-top-color: @green;
                border-left-color: @green;
                width: 12px;
                height: 12px;
            }
        }
    }
    nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
