<template>
    <div id="ikki">
        <van-overlay :show="$store.state.loading">
            <van-loading vertical type="spinner" :color="$utils.less.primaryColor" size="60" :text-color="$utils.less.primaryColor" text-size="24">{{ $t('Common.Loading') }}</van-loading>
        </van-overlay>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'IKKIView',
    };
</script>

<style lang="less">
    #ikki {
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
</style>
