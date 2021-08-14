<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="进行中项目">
        <el-row>
          <!-- <el-row>戴姆勒ServiceMall MMC</el-row>
          <el-row>计划起止日期：2021-04-20 ~ 2021-08-31</el-row>
          <el-row>成本小计：400000/20000/380000</el-row> -->
          <!-- <el-table :data="list" style="width: 100%">
            <el-table-column prop="name" width="120"></el-table-column>
          </el-table> -->
          <div v-for="value in arr" :key="value" class="text item cardtxt">
            {{value}}
          </div>
        </el-row>         
          <el-button type="warning" plain @click="toCostBreakdown()">成本明细</el-button>
        
        <el-divider></el-divider>
        <el-row>
          <!-- <el-row>戴姆勒ServiceMall MMC</el-row>
          <el-row>计划起止日期：2021-04-20 ~ 2021-08-31</el-row>
          <el-row>成本小计：400000/20000/380000</el-row> -->
          <el-row>
            <div v-for="value in arr" :key="value" class="text item cardtxt">
                {{value}}
            </div>
          </el-row>
          <!-- <el-table :data="list" style="width: 100%">
            <el-table-column prop="programing" width="120"></el-table-column>
          </el-table> -->
          <el-button type="warning" plain @click="toCostBreakdown()">成本明细</el-button>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="已完成项目">
        <el-row>
          <el-table :data="programingList" style="width: 100%">
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="monthDuty" label="本月在岗" width="120"></el-table-column>
            <el-table-column prop="unitPrice" label="成本单价" width="120"></el-table-column>
            <el-table-column prop="costConsumption" label="成本消耗" width="120"></el-table-column>
            <el-table-column prop="income" label="所得(元)" width="120">
              <template scope="scope">
                  <span v-if="scope.row.income>=0" style="color:red">{{ scope.row.income }}</span>
                  <span v-else style="color: #37B328">{{ scope.row.income }}</span>
                </template>
            </el-table-column>
          </el-table>
          <el-button type="warning" plain @click="toCostBreakdown()">成本明细</el-button>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-table :data="list" style="width: 100%">
            <el-table-column prop="programing" width="120"></el-table-column>
          </el-table>
          <el-button type="warning" plain @click="toCostBreakdown()">成本明细</el-button>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  // props: ["list"],
  data() {
    return {
      arr:['戴姆勒ServiceMall OTR','计划起止日期：2021-04-20 ~ 2021-08-31','成本小计：400000/20000/380000'],
      list:[
        {
          name:'戴姆勒ServiceMall MMC计划起止日期：2021-04-20 ~ 2021-08-31成本小计：400000/20000/380000'
        }
      ]
    };
  },
  methods: {
      toCostBreakdown() {
          this.$emit("toCostBreakdown","nnnn")
      }
  }
};
</script>

<style></style>
