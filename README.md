<h2>Electricity-Bill-Estimator</h2>

<ul>
  <li> Sign-up provision with admin type and other user type. Full access for admin only.</li>
  <li> CRUD operations in User-setup(*Admin only)</li>
  <li> Electricity Bill calculation for a span of 60 days is based on the tariff structure shown in the below table.</li>
  <li> Forecasted bill amount of over usage and under usage is provided to users for better awareness of electricity usage.</li>

</ul>

<div class="table-responsive" >
          <h3>Electricity Tariff Structure:</h3>

<table>
  <tr>
    <th>Slab</th>
    <th>Unit Charges</th>
    <th>Fixed Charges(1-3 phase)/Con/month</th>
  </tr>
  <tr>
    <td>0-50</td>
    <td>Rs. 3.15</td>
    <td>Rs. 35-90</td>
  </tr>
  <tr>
    <td>50-100</td>
    <td>Rs. 3.70</td>
    <td>Rs. 45-90</td>
  </tr>
  <tr>
    <td>101-150</td>
    <td>Rs.4.80</td>
    <td>Rs. 55-100</td>
  </tr>
  <tr>
    <td>151-200</td>
    <td>Rs.6.40</td>
    <td>Rs. 75-130</td>
  </tr>
  <tr>
    <td>201-250</td>
    <td>Rs.7.60</td>
    <td>Rs. 80-100</td>
  </tr>
  <tr>
    <td>0-300</td>
    <td>Rs. 5.80 for all units</td>
    <td>Rs. 100-110</td>
  </tr>
  <tr>
    <td>0-350</td>
    <td>Rs. 6.60 for all units</td>
    <td>Rs. 110-110</td>
  </tr>
  <tr>
    <td>0-400</td>
    <td>Rs. 6.90 for all units</td>
    <td>Rs. 120-120</td>
  </tr>
  <tr>
    <td>0-500</td>
    <td>Rs. 7.10 for all units</td>
    <td>Rs. 130-130</td>
  </tr>
  <tr>
    <td>>500</td>
    <td>Rs. 7.90 for all units</td>
    <td>Rs. 150-150</td>
  </tr>
</table>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
        </div>
