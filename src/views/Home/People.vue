<template>
  <span>
      <my-table></my-table>
      <my-form></my-form>
  </span>
</template>

<script>
import Form from "@/components/Home/Form";
import AdminList from "@/components/Home/AdminList";
export default {
  data() {
      return {}
  },
  components: {
    "my-form": Form,
    "my-table": AdminList
  },
};
</script>