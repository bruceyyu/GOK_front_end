<template>
    <div class="user-dead-page" style="background-image: url(../static/img/dead-bg.jpg);">
    <message
    :msg_count = 0>
    </message>
    <div class="firstlogin-text-box centerlize">
    <div class="firstlogin-text">你</div>
    <div class="firstlogin-text">死了</div>
    <div class="firstlogin-text">在这个乱世里</div>
    <div class="firstlogin-text">人们对死亡已经习以为常</div>
    <div class="firstlogin-text">没有人会朝你多看一眼</div>
    <div class="firstlogin-text">你的名字也会流失在历史的长河里</div>
    <div class="firstlogin-text">这一切都是为了什么呢</div>
    <div class="firstlogin-text">信仰？责任？利益？权力？</div>
    <div class="firstlogin-text">也许当你闭上眼前才明白</div>
    <div class="firstlogin-text">你只希望活着而已</div>
    </div>
    </div>
</template>

<script>
import message from './message/components/message'
export default {
    components: {
        message
    }
}
</script>

