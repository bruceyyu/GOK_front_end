<template>
<transition name='popup'>
  <div class="popup-outer" v-if="showPopup">
    <div class="popup centerlize shadow radius">
      <div class="popup-title">{{title}}</div>
      <div class="popup-text">
        <slot>
          <p>{{message}}</p>
        </slot>
      </div>
      <div class="popup-btn-outer">
        <div v-if="type === 'confirm'">
          <div class="popup-btn-2" @click="sure">确定</div>
          <div class="popup-btn-2" @click="cancel">取消</div>
        </div>
        <div v-else-if="type === 'inform'">
          <div class="popup-btn" @click="cancel">知道了</div>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'popup',
  data() {
    return {
      showPopup: false,
    };
  },
  props: {
    title: {
      type: String,
      default: '提示',
    },
    message: {
      type: String,
    },
    type: {  // 可以有confirm, 和inform两个类型
      type: String,
      default: 'confirm',
      validator(value) {
        return value === 'confirm' || value === 'inform';
      },
    },
    sureBtn: {
      type: Function,
    },
    cancelBtn: {
      type: Function,
    },
    context: {
      type: Object,
    },
  },
  methods: {
    cancel() {
      if (this.cancelBtn) {
        this.cancelBtn.apply(this.context);
      }
      this.close();
    },
    sure() {
      if (this.sureBtn) {
        this.sureBtn.apply(this.context);
      }
      this.$emit('sure')
      this.close();
    },
    show() {
      this.showPopup = true;
    },
    close() {
      this.showPopup = false;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.popup-leave-to{
  opacity: 0;
}
.popup-leave-active{
  transition: opacity 0.5s;
}
</style>