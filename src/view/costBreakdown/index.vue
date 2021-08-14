<template>
  <div>
    <costBreakdown></costBreakdown>
  </div>
</template>

<script>
import { proList, getProgramList } from "../../api/index.js";
import costBreakdown from "./component/costBreakdown.vue";

export default {
  name: "",
  data() {
    return {
      proList: []
    };
  },
  mounted() {
    this.getList();
  },
  components: {
    costBreakdown,
  },
  methods: {

    getList() {
      let data = {};
      getProgramList(data).then(res => {
        console.log(res);
      });

      proList().then(res => {
        console.log(res.data.data.list);
        this.proList = res.data.data.list;
      });
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
</style>