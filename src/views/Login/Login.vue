<template>
<div id='loginBJ' class="container">
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <h1 style="text-align: center">ENFI设计数据管理后台</h1>
            <my-form></my-form>
        </div>
        <div class="col-md-3"></div>
    </div>
</div>
</template>

<script>
import Form from '@/components/Login/Form';
export default {
  name: 'Home',
  components: {
      'my-form' : Form
  }
}
</script>