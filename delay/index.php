<html>
 <head>
  <title>PHP</title>
 </head>
 <body>
 <?php
  set_time_limit(0);
  sleep(5);
  $hostname = getenv('HOSTNAME');
  echo $hostname;
  ?>
 </body>
</html>
