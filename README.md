<h2>Electricity-Bill-Estimator</h2>

<ul>
  <li> Sign-up provision with admin type and other user type. Full access for admin only.</li>
  <li><strong>For Admin, Consumer Name: admin and Password: admin@12345</strong></li>
  <li> CRUD operations in User-setup(*Admin only). Admin can update or delete consumer's details.</li>
  <li> <strong>Electricity Bill calculation of valid consumer is done for a span of 60 days based on the tariff structure shown in the below table.</strong></li>
  <li> Forecasted bill amount as per the current usage. </li>
  <li> Forecasted bill amount with  1 unit additional or reduced usage per day is provided to users for better planning of electricity usage.</li>
  <li><strong> Marginal difference in the electricity consumption often lead to higher slab without subsidized rate. So knowing forecasted amount with 1 unit additional or reduced usage helps users in planning electricity usage during the rest of billing cycle.
  </strong></li>
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
    <td>Rs. 75-100</td>
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
