# 通鑑職場錦囊 LINE 機器人

在 LINE 裡描述職場狀況，機器人從《資治通鑑》16 則故事中找出對應的一則，回覆情境判讀、行動建議、應避免的做法和一句可以直接說的話。

- 不用架伺服器：程式放在 Google Apps Script，免費。
- 故事資料與網頁版 `tongjian/index.html` 相同。
- LINE 的「回覆訊息」不計入官方帳號的免費訊息則數。

## 使用方式（加好友後）

| 輸入 | 回覆 |
|---|---|
| 一兩句話描述狀況，例如「剛升主管，同事不服我」 | 最對應的故事卡片＋建議，下方按鈕可看相關故事 |
| 情境名稱，例如「衝突化解」（可點按鈕） | 該情境所有故事的輪播卡片 |
| 「看：將相和」 | 指定故事的完整建議 |
| 「選單」或「說明」 | 使用說明 |

問題裡出現霸凌、騷擾、違法等字眼時，會先提醒使用者尋求人資或專業協助。

## 設定步驟（約 15 分鐘）

### 1. 建立 LINE 官方帳號與 Messaging API
1. 到 [LINE Official Account Manager](https://manager.line.biz/) 建立官方帳號（免費方案即可）。
2. 進入帳號後，到「設定 → Messaging API」按「啟用 Messaging API」，選擇或建立一個 Provider。
3. 到 [LINE Developers Console](https://developers.line.biz/console/)，打開剛建立的 channel，到「Messaging API」分頁，在最下方「Channel access token (long-lived)」按「Issue」，複製這串 token。

### 2. 建立 Google Apps Script
1. 到 [script.google.com](https://script.google.com/) 按「新專案」，把專案命名為「通鑑職場錦囊」。
2. 刪掉預設內容，把本資料夾的 `Code.gs` 全文貼上，按儲存。
3. 左側「專案設定（齒輪）」→ 最下方「指令碼屬性」→「新增指令碼屬性」：
   - 屬性：`LINE_CHANNEL_ACCESS_TOKEN`
   - 值：步驟 1 複製的 token
4. 右上「部署 → 新增部署」，類型選「網頁應用程式」：
   - 執行身分：**我**
   - 誰可以存取：**所有人**
   
   按「部署」並完成 Google 授權，複製「網頁應用程式網址」（以 `/exec` 結尾）。

### 3. 把網址接到 LINE
1. 回到 LINE Developers Console →「Messaging API」分頁 →「Webhook settings」，貼上網址，開啟「Use webhook」。
2. 到 LINE Official Account Manager →「設定 → 回應設定」：
   - 「Webhook」開啟
   - 「自動回應訊息」關閉（避免和機器人重複回覆）
   - 「加入好友的歡迎訊息」可關閉（機器人會自己送歡迎訊息）
3. 用手機 LINE 掃 Developers Console 上的 QR code 加好友，傳一句話測試。

## 注意事項
- **修改程式後**：要到「部署 → 管理部署 → 編輯（鉛筆）→ 版本選『新版本』→ 部署」，網址不變。直接儲存不會生效。
- 按 Webhook 的「Verify」若顯示錯誤，但實際傳訊息有回覆，就代表運作正常（Apps Script 回應時會先轉址，有時會讓 Verify 誤判）。
- Apps Script 讀不到 LINE 的簽章標頭，無法驗證請求來源。請勿公開 webhook 網址。
- 測試：在 Apps Script 編輯器選擇 `testRoute` 函式後按「執行」，可以在執行記錄看到回覆內容。
- 要新增或修改故事：編輯 `Code.gs` 最上方的 `STORIES` 陣列（建議同步修改網頁版）。
