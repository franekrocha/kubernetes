import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  sleep(1);
  http.get("http://httpd.apps.example.com");
}
