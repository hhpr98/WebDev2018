<?php
$mysqli = new mysqli("den1.mysql2.gear.host", "ishopz", "Gg4DQV!!K03j", "ishopz");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT username FROM ishopz.users where username=? limit 1";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cname);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>CustomerID</th>";
echo "<th>CompanyName</th>";
echo "<td>" . $cname . "</td>";
echo "<th>ContactName</th>";
echo "<th>Address</th>";
echo "<th>City</th>";
echo "<th>PostalCode</th>";
echo "<th>Country</th>";
echo "</tr>";
echo "</table>";
?>