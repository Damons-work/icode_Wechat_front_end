<template>
  <div>
    <el-row>
      <!-- <el-table :data="list" style="width: 100%">
        <el-table-column prop="name" width="120"></el-table-column> -->
          <el-row>
            <div v-for="value in arr1" :key="value" class="text item cardtxt">
                {{value}}
            </div>
          </el-row>
      <!-- </el-table> -->
    </el-row>
    <!-- <el-divider></el-divider> -->
      <el-tabs type="border-card">
        <el-tab-pane label="6月（9360）">
          <!-- <el-table :data="list" style="width: 100%">
            <el-table-column prop="programing" width="120"></el-table-column>
          </el-table> -->
          <el-row>
            <div v-for="value in arr2" :key="value" class="text item cardtxt">
                {{value}}
            </div>
          </el-row>
          <el-divider></el-divider>
          <el-row>
            <div v-for="value in arr2" :key="value" class="text item cardtxt">
                {{value}}
            </div>
          </el-row>
          <!-- <el-table :data="list" style="width: 100%">
            <el-table-column prop="programing" width="120"></el-table-column>
          </el-table> -->
        </el-tab-pane>

				<el-tab-pane label="5月（6300）">
          <el-table :data="fivelist" style="width: 100%">
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
          

          <el-divider></el-divider>
					
          <el-table :data="fivelist" style="width: 100%">
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
        </el-tab-pane>




				<el-tab-pane label="4月（4900）">
          <el-table :data="list" style="width: 100%">
            <el-table-column prop="programing" width="120"></el-table-column>
          </el-table>

          <el-divider></el-divider>
					
          <el-table :data="list" style="width: 100%">
            <el-table-column prop="programing" width="120"></el-table-column>
          </el-table>
        </el-tab-pane>

      </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["list"],
  data() {
    return {
      arr1:['戴姆勒ServiceMall OTR','计划起止日期：2021-04-20 ~ 2021-08-31','成本小计：400000/20560/379440'],
      arr2:['王雷','本月在岗：06.01 ~ 06.06  共计：6 天  投入占比：100%','成本单价：30000 元/月 折合 1000元/天','成本消耗：1000元/天 x 6天 x 100%','6000元'],
      list:[{
        name:"戴姆勒ServiceMall OTR计划起止日期：2021-04-20 ~ 2021-08-31成本小计：400000/20560/379440",
        programing:"王雷本月在岗：06.01 ~ 06.06  共计：6 天  投入占比：100%成本单价：30000 元/月 折合 1000元/天成本消耗：1000元/天 x 6天 x 100% =6000 元"
      }],
      fivelist:[{
        name:'王雷',
        monthDuty:'06.01 ~ 06.06  共计：6 天  投入占比：100%',
        unitPrice:'30000 元/月 折合 1000元/天',
        costConsumption:'1000元/天 x 6天 x 100%',
        income:'6000'
      }]
    };
  }
};
</script>

<style></style>
