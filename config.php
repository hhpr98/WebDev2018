<?php

$host = "den1.mysql2.gear.host"; /* Host name */
$user = "ishopz"; /* User */
$password = "Gg4DQV!!K03j"; /* Password */
$dbname = "ishopz"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}