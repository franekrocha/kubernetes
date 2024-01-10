import { browser } from 'k6/experimental/browser';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    ui: {
      executor: 'constant-vus',
      vus: 10,
      duration: '300s',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
}
export default async function () {
  const page = browser.newPage();
  try {
    // LOGIN
    await page.goto('https://${__ENV.KIALI_ROUTE}/');
    const submitButton = page.locator('//button[text()="Log In With OpenShift"]');
    await Promise.all([page.waitForNavigation(), submitButton.click()]);
    const submitHref = page.locator('//a[text()="htpasswd"]');
    await Promise.all([page.waitForNavigation(), submitHref.click()]);
    page.locator('input[name="username"]').type('${__ENV.KIALI_USER}');
    page.locator('input[name="password"]').type('${__ENV.KIALI_PASS}');
    const submitButton2 = page.locator('//button[text()="Log in"]');
    await Promise.all([page.waitForNavigation(), submitButton2.click()]);
    sleep(10);
    // GRAPH
    await page.goto('https://${__ENV.KIALI_ROUTE}/console/graph/namespaces/?traffic=http%2ChttpRequest&graphType=versionedApp&namespaces=bookinfo&duration=21600&refresh=15000&layout=kiali-dagre&namespaceLayout=kiali-dagre');
    sleep(10);
    // TRACES
    await page.goto('https://${__ENV.KIALI_ROUTE}/console/namespaces/bookinfo/applications/productpage?tab=traces&rangeDuration=600&refresh=0');
    sleep(10);
  } finally {
    page.close();
  }
}
