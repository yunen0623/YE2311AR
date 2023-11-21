// 定義全域變數用來儲存選中的 WiFi 名稱
let selectedWifiName = '';

function showWifiList() {
    const wifiListContainer = document.getElementById('wifiListContainer');

    // 假設以下是一些虛構的 WiFi 名稱
    const wifiNames = ["WiFi1", "WiFi2", "WiFi3", "WiFi4", "WiFi5"];

    // 清空原有內容
    wifiListContainer.innerHTML = '';

    // 顯示 WiFi 列表
    wifiNames.forEach(function (wifiName) {
        const wifiListItem = document.createElement('div');
        wifiListItem.className = 'wifi-list-item';
        wifiListItem.textContent = wifiName;

        // 為每個 WiFi 列表項目添加點擊事件
        wifiListItem.addEventListener('click', function () {
            // 將選中的 WiFi 名稱存儲在全域變數中
            selectedWifiName = wifiName;
            // 將選中的 WiFi 名稱顯示在 SSID 框中
            document.getElementById('username').value = selectedWifiName;
            // 隱藏 WiFi 列表容器
            wifiListContainer.style.display = 'none';
        });

        wifiListContainer.appendChild(wifiListItem);
    });

    // 顯示 WiFi 列表容器
    wifiListContainer.style.display = 'block';
}
