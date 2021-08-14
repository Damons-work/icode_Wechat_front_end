<template>
  <div>
    <programCost @toCostBreakdown="toCostBreakdown"></programCost>
  </div>
</template>

<script>
import { proList, getProgramList } from "../../api/index.js";
import programCost from "./component/programCost.vue";

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
    programCost
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
    },
    toCostBreakdown(e)  {
      console.log(e)
      this.$router.push({
        path:"costBreakdown"
      })
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
