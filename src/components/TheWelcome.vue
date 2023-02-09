<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

</script>

<template>
   
  <table id="tblMainTable" onload="return startTime();">
  <thead>
    <th>Das ist eine Vostellung des Zeitzonnen in verschidene Ländern.</th>
    
  </thead>
  <tbody>

    <tr>
      <td  > Zeit in CET </td>
    </tr>
    <tr>
      <td  ><div id="clockCET"> 00</div></td>
    </tr>

    <tr>
      <td>
<table>
  <thead>
    <tr>
      <th>Berlin </th><th>New York </th><th>Peking </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div id="clockBerlin"> 00</div></td><td><div id="clockNewYork"> 00</div></td><td><div id="clockPeking"> 00</div></td>
    </tr>
  </tbody>
</table>

      </td> 
    </tr> 
  </tbody>
 </table>
</template>
<style>
table#tblMainTable {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
table#tblMainTable table {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

table#tblMainTable table th, td {
  text-align: center;
  padding: 10pt 20pt;
}

</style>

 