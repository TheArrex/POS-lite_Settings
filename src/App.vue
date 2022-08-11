<template>
  <header>
    <h1 class="font-bold text-center text-[28px] py-4">Statistics</h1>
  </header>

  <main>
    <div class="grid grid-cols-3 gap-x-4">
      <div class="divide-y-2 py-2 px-2.5 bg-slate-bg rounded-lg">
        <p class="text-slate-dark text-base pb-1.5 font-bold">$ 24509.5</p>
        <p class="text-xs pt-1">Revenue</p>
      </div>
      <div class="divide-y-2 py-2 px-2.5 bg-slate-bg rounded-lg">
        <p class="text-slate-dark text-base pb-1.5 font-bold">238</p>
        <p class="text-xs pt-1">Orders count</p>
      </div>
      <div class="divide-y-2 py-2 px-2.5 bg-slate-bg rounded-lg">
        <p class="text-slate-dark text-base pb-1.5 font-bold">$ 12.3</p>
        <p class="text-xs pt-1">Average receipt</p>
      </div>
    </div>
    <div class="mt-5 bg-slate-bg rounded-lg pt-1.5">
      <h2 class="text-base font-bold ml-2.5">Revenue</h2>
      <LineChart :labels="weekdays" :data="revenueData" :min="500" :step-size="500"/>
    </div>
    <div class="mt-5 bg-slate-bg rounded-lg pt-1.5">
      <h2 class="text-base font-bold ml-2.5">Orders count</h2>
      <LineChart :labels="days" :data="ordersCountData" :min="10" :step-size="5"/>
    </div>
    <div class="mt-5 bg-slate-bg rounded-lg pt-1.5">
      <h2 class="text-base font-bold ml-2.5">Average receipt</h2>
      <LineChart :labels="weekdays" :data="averageReceiptData" :min="9" :step-size="1"/>
    </div>
    <div>
      <h2 class="text-base font-bold mt-5 mb-0.5">Top-selling items</h2>
      <div class="grid grid-cols-[8fr_2fr_2fr] uppercase text-slate-light text-xs leading-5 py-1.5 border-b">
        <p class="font-bold">Item</p>
        <p class="font-bold">Section</p>
        <p class="font-bold">Amount</p>
      </div>
      <div
        v-for="item in topSelling"
        class="grid grid-cols-[8fr_2fr_2fr] text-xs leading-5 py-1.5 border-b"
      >
        <p class="text-[#37ACD2]">{{ item.name }}</p>
        <p>{{ item.section }}</p>
        <p>{{ item.amount }}</p>
      </div>
    </div>
    <div>
      <h2 class="text-base font-bold mt-5">Discounts</h2>
      <p class="text-sm my-2 text-slate-light">Revenue: $ 2450</p>
      <div class="grid grid-cols-[5fr_2fr_2fr_3fr] uppercase text-slate-light text-xs leading-5 py-1.5 border-b">
        <p class="font-bold">Name</p>
        <p class="font-bold">Amount</p>
        <p class="font-bold">Sum, $</p>
        <p class="font-bold">% of revenue</p>
      </div>
      <div
        v-for="item in discounts"
        class="grid grid-cols-[5fr_2fr_2fr_3fr] text-xs leading-5 py-1.5 border-b"
      >
        <p>{{ item.name }}</p>
        <p>{{ item.amount }}</p>
        <p>{{ item.sum }}</p>
        <p>{{ item.percentage }}</p>
      </div>
    </div>
    <div>
      <h2 class="text-base font-bold mt-5 mb-0.5">Top-10 customers</h2>
      <div class="grid grid-cols-[8fr_2fr_2fr] uppercase text-slate-light text-xs leading-5 py-1.5 border-b">
        <p class="font-bold">Item</p>
        <p class="font-bold">Orders</p>
        <p class="font-bold">Sum, $</p>
      </div>
      <div
        v-for="item in topCustomers"
        class="grid grid-cols-[8fr_2fr_2fr] text-xs leading-5 py-1.5 border-b"
      >
        <p class="text-[#37ACD2]">{{ item.name }}</p>
        <p>{{ item.orders }}</p>
        <p>{{ item.sum }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import LineChart from './components/lineChart';

export default {
  components: { LineChart },
  data () {
    return {
      loading: true,
      weekdays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      days: ['8.08', '9.08', '10.08', '11.08', '12.08', '13.08', '14.08'],
      revenueData: [1100, 1400, 1250, 1750, 2250, 2500],
      ordersCountData: [22, 18, 23, 28, 24, 20],
      averageReceiptData: [11.4, 11.5, 11.1, 12.4, 11.9, 12.1],
      topSelling: [
        {name: 'Pepperoni', section: 'Pizza', amount: 232},
        {name: 'Philadelphia maki', section: 'Sushi', amount: 217},
        {name: 'Margherita', section: 'Pizza', amount: 199},
        {name: 'Caesar salad', section: 'Salads', amount: 168},
        {name: 'Pepsi 2L', section: 'Drinks', amount: 152}
      ],
      discounts: [
        {name: 'Pickup (10%)', amount: 33, sum: 330, percentage: 2.71},
        {name: 'Gift ($5)', amount: 51, sum: 255, percentage: 1.35},
        {name: 'Birthday (20%)', amount: 19, sum: 199, percentage: 0.87},
        {name: 'Charity (100%)', amount: 1, sum: 100, percentage: 0.18},
        {name: 'Mistake (50%)', amount: 4, sum: 88, percentage: 0.01},
      ],
      topCustomers: [
        {name: 'Anthony, +7 961 848 5536', orders: 11, sum: 216},
        {name: 'Victoria, +7 961 848 5536', orders: 5, sum: 160},
        {name: 'Muhammed, +7 961 848 5536', orders: 3, sum: 147},
        {name: 'Daniel, +7 961 848 5536', orders: 6, sum: 144},
        {name: 'Maria, +7 961 848 5536', orders: 14, sum: 136}
      ]
    }
  }
}

</script>