/* 故事資料：與 tongjian/index.html 同步產生 */
const CATS = ["向上管理","同事協作","衝突化解","帶領團隊","推動變革","功勞名聲","危機壓力","職涯成長"];

const STORIES = [
 {id:"jianting",title:"兼聽則明",src:"唐紀・太宗貞觀二年",cat:["衝突化解","帶領團隊"],
  story:"唐太宗問魏徵：「君主怎樣才能明察，怎樣會昏暗？」魏徵答：「兼聽則明，偏信則暗。」並舉秦二世只信趙高、終致亡國為例。太宗深以為然。",
  quote:"兼聽則明，偏信則暗。",
  lesson:"做判斷前聽多方說法，別讓第一個來找你的人替你定調。",
  actions:["分別找當事人一對一了解，不在群組裡問","把「事實」和「個人解讀」分開記下來","下結論前，找一位立場不同的人挑戰你的看法"],
  avoid:["聽完一方就公開表態","把轉述的話當成原話"],
  script:"這件事我想先分別聽聽兩邊怎麼看，週四前整理好再跟大家說。",
  kw:["聽說","傳言","一面之詞","判斷","爭議","兩邊","夾在中間","決策","八卦","小道消息","各說各話","評估","誰對"]},
 {id:"jimo",title:"即墨大夫與阿大夫",src:"周紀・齊威王",cat:["功勞名聲"],
  story:"齊威王派人實地查看：即墨大夫天天被說壞話，轄地卻田野開墾、百姓富足，是因他不肯巴結近臣；阿大夫天天被稱讚，轄地卻荒蕪，是靠重金收買左右。威王重賞前者、重懲後者，群臣從此不敢粉飾。",
  quote:"是子不事吾左右以求助也。",
  lesson:"名聲可以經營，實績才是根本。被中傷時，讓成果替你說話。",
  actions:["定期用數據向主管回報進度，讓成果看得見","不逐一反駁流言，用可查證的紀錄回應","若你是主管，親自看現場和數字，不只聽風評"],
  avoid:["花大量力氣在辦公室政治上反擊","以牙還牙，也去說對方壞話"],
  script:"這是這一季的進度和數據，有任何疑問，我可以帶您看實際情況。",
  kw:["背後","說壞話","中傷","流言","抹黑","拍馬屁","討好","關係","風評","不公平","考核","績效","打小報告","告狀","黑函","偏心","差別待遇","陷害","年終","獎金","考績","沒升","不公","誣賴","誣陷"]},
 {id:"zhibo",title:"智伯之亡",src:"周紀・威烈王",cat:["同事協作"],
  story:"智伯宴請韓康子、魏桓子，席間戲弄韓康子、羞辱其家臣段規。族人智國勸他：「不防備禍難，禍難一定會來。」智伯不聽，又強向韓、魏、趙索地。圍攻晉陽時，韓魏倒戈與趙聯手，智氏滅族。司馬光評：「才勝德謂之小人。」",
  quote:"主不備難，難必至矣。",
  lesson:"能力強卻輕慢同儕，終會被同儕聯手反撲。",
  actions:["公開場合給同事留面子，玩笑不拿別人的短處開","向別人要資源時，同時說清楚對方能得到什麼","記得今天的配角，明天可能是關鍵盟友"],
  avoid:["會議上當眾糾正或嘲諷","仗著績效向其他部門強索資源"],
  script:"這部分多虧你們組先把資料整理好，我們才能這麼快完成。",
  kw:["我很強","傲慢","驕傲","自大","我開玩笑","看不起他","業績好","能力強","恃才","得罪","樹敵","太直","嘴快"]},
 {id:"xumu",title:"徙木立信",src:"周紀・秦孝公",cat:["帶領團隊","推動變革"],
  story:"商鞅變法前，擔心百姓不信，在都城南門立一根三丈長的木頭，宣布能搬到北門者賞十金。眾人不信，加到五十金，終於有人搬了，商鞅當場兌現。新法隨後頒布。",
  quote:"信者，人君之大寶也。",
  lesson:"新官上任或推新制度，先用一件小事兌現承諾，建立信任。",
  actions:["挑一件小而看得見的事，說到做到","承諾寫下來，按時回報進度","初期寧可少承諾、多兌現"],
  avoid:["一上任就大幅改組","答應了卻拖延或打折扣"],
  script:"我先處理大家反映最久的報銷流程，兩週內給結果。",
  kw:["新主管","升遷","升官","升主管","上任","新團隊","信任","不服","威信","承諾","新制度","帶人","服眾"]},
 {id:"jiangxiang",title:"將相和",src:"周紀・赧王",cat:["衝突化解"],
  story:"藺相如因功拜上卿，位在老將廉頗之上。廉頗揚言要羞辱他，相如便處處迴避。門客以為恥，相如說：「強秦不敢攻趙，只因我們兩人都在。我這樣做，是先國家之急而後私仇。」廉頗聽聞，負荊登門謝罪，兩人成為刎頸之交。",
  quote:"先國家之急而後私讎也。",
  lesson:"以大局為先，暫時退讓不是軟弱；理虧時也要有認錯的勇氣。",
  actions:["避免在公開場合正面衝突","讓可信的第三方了解你的考量","如果你是理虧的一方，直接、具體地道歉"],
  avoid:["為了面子爭一時","冷戰到影響團隊目標"],
  script:"我們看法不同沒關係，但這個專案需要你的經驗，找個時間對齊一下好嗎？",
  kw:["不服","敵意","資深","老鳥","前輩","嫉妒","吃醋","衝突","吵架","道歉","和好","冷戰","槓上","處不來","看我不順眼","嘲笑","羞辱","當眾","酸我","挖苦","難相處","難搞","機車","個性差","脾氣差","合不來","討厭"]},
 {id:"lusu",title:"魯肅宇下進言",src:"漢紀・獻帝建安十三年",cat:["向上管理"],
  story:"曹操大軍南下，孫權群臣多主張投降。孫權起身更衣，魯肅追到屋簷下私下說：「我投降，曹操還會給我個官做；將軍投降，要去哪裡安身？」並建議召回周瑜。孫權歎道：「這是上天把你賜給我。」",
  quote:"今肅可迎操耳，如將軍不可也。",
  lesson:"重要意見挑對時機、私下說，並且站在對方的利益上說。",
  actions:["會上不硬碰，會後找主管一對一","從主管的目標與風險出發，而不是你的立場","附上具體可行的下一步"],
  avoid:["當眾和多數人辯論","只講「我覺得」，沒有對主管的影響分析"],
  script:"剛才會上的方案，我想從您要向上交代的角度補充一個風險，大約五分鐘。",
  kw:["說服","提案","意見不同","反對","建議","進言","被否決","不被採納","不聽","少數","溝通","想說服","開口","怎麼說","請假","不敢說","沒人聽"]},
 {id:"majie",title:"揮淚斬馬謖",src:"魏紀・明帝太和二年",cat:["帶領團隊"],
  story:"諸葛亮北伐，不顧眾議派馬謖督前鋒。馬謖違令捨水上山，被張郃大敗。諸葛亮依軍法斬馬謖，並上疏自貶三等：「臣明不知人。」又對眾人說：「今後凡有忠心的，請多指出我的缺失。」",
  quote:"但勤攻吾之闕，則事可定。",
  lesson:"用人失誤時，對事公正處理，也承擔主管自己的責任。",
  actions:["依規則處理，對事不對人","公開承認自己在指派上的判斷失誤","邀請團隊指出盲點，把失敗轉成流程改進"],
  avoid:["把錯全推給執行的人","因私交網開一面，造成不公"],
  script:"這次是我指派時沒有評估好風險，主要責任在我。接下來我們這樣調整……",
  kw:["出包","犯錯","失誤","失敗","部屬","下屬","責任","推卸","處罰","背鍋","指派","用人","搞砸","疏失","遲到","紀律","不守規定","規矩","早退"]},
 {id:"xiaohe",title:"蕭何散財佐軍",src:"漢紀・高帝十一年",cat:["功勞名聲","向上管理"],
  story:"蕭何留守關中，功勞第一，劉邦卻加派衛隊「保護」他。召平提醒：「禍從此開始了。主上在外征戰，你在內守城，加封派兵是在提防你。」建議他辭讓封賞、拿出家財資助軍隊。蕭何照做，劉邦大悅。",
  quote:"願君讓封勿受，悉以家私財佐軍。",
  lesson:"表現亮眼時，讓主管感受到你在幫他成功，而不是威脅他。",
  actions:["把成果和主管、團隊的目標連在一起說","主動、透明地回報，不讓主管從別人口中聽到","重要場合把舞台留給主管"],
  avoid:["越級邀功","讓個人聲望蓋過主管"],
  script:"這次成果是照您定的方向做出來的，下一步想請您看看要不要擴大。",
  kw:["功勞","表現太好","主管忌憚","提防","功高震主","光芒","越級","邀功","打壓","被防","不信任我","搶風頭"]},
 {id:"caocan",title:"蕭規曹隨",src:"漢紀・惠帝",cat:["職涯成長","推動變革"],
  story:"曹參接替蕭何為相國，一切遵照蕭何舊制。惠帝不解，曹參反問：「陛下比高帝如何？我比蕭何如何？」惠帝說都不如。曹參說：「既然法令已經清楚，我們守好職責、遵循不失，不也可以嗎？」",
  quote:"遵而勿失，不亦可乎！",
  lesson:"接手運作良好的工作，先守成再求變；改變要有理由，不是為了證明自己。",
  actions:["前 90 天先弄懂既有流程為什麼這樣設計","保留有效的部分，並公開肯定前任","只改有數據證明的問題"],
  avoid:["為了展現存在感全盤推翻","批評前任"],
  script:"前任留下的流程很完整，我會先照著跑一季，再提出需要調整的地方。",
  kw:["接手","前任","交接","調部門","轉調","新工作","新環境","改變","沿用","舊制度","剛來","被調","調職","單位","調動","換部門"]},
 {id:"lumeng",title:"士別三日",src:"漢紀・獻帝建安十五年",cat:["職涯成長"],
  story:"孫權勸呂蒙讀書，呂蒙推說軍務繁忙。孫權說：「不是要你當博士，只要多看看過去的事。」呂蒙於是向學。後來魯肅與他議事大吃一驚：「你已不是當年的吳下阿蒙！」呂蒙答：「士別三日，即更刮目相待。」",
  quote:"士別三日，即更刮目相待。",
  lesson:"職位上升就要主動補能力；也別用舊眼光看待同事。",
  actions:["以工作需要為導向學習，每週固定時段","讓成長在具體的討論與成果中被看見","同事進步時，明確給予肯定"],
  avoid:["以「太忙」為由停止學習","用過去的印象替人貼標籤"],
  script:"上次那個問題我回去研究了一下，有個新做法想跟你討論。",
  kw:["學習","成長","進修","瓶頸","停滯","轉職","能力不足","被看不起","刮目相看","資淺","不會","跟不上","想離職","換工作","我想走","迷惘","沒方向","前途"]},
 {id:"loushide",title:"婁師德薦狄仁傑",src:"唐紀・武后",cat:["同事協作"],
  story:"狄仁傑拜相後，屢次排擠婁師德。武則天問他：「婁師德能識人嗎？」狄仁傑說沒聽說過。武則天說：「我之所以重用你，正是婁師德推薦的。」狄仁傑大慚：「婁公盛德，我被他包容卻不知道。」",
  quote:"婁公盛德，我為其所包容乃不知。",
  lesson:"默默成就他人，信任終會被看見；也提醒自己別輕易看輕同事。",
  actions:["持續做對的事，不讓對方的態度決定你的專業","推薦人選依能力，不依交情","對不友善的人，仍維持基本合作"],
  avoid:["因為被排擠就扯對方後腿","四處宣揚自己幫過誰"],
  script:"這件事你比較熟，我就照你的方式配合，有需要我補的地方再說。",
  kw:["排擠","不領情","成見","被針對","幫忙","好心沒好報","包容","度量","推薦","小人","不友善","冷淡"]},
 {id:"xiean",title:"謝安圍棋",src:"晉紀・孝武帝太元八年",cat:["危機壓力"],
  story:"前秦苻堅百萬大軍南下，京師震恐。謝安神色如常，與謝玄下棋。淝水捷報送到，他看完放在一旁，繼續下棋。客人問起，只淡淡說：「小兒輩遂已破賊。」下完棋回內室，過門檻時才高興得折斷了木屐齒。",
  quote:"小兒輩遂已破賊。",
  lesson:"壓力越大，越要穩住情緒，信任你授權的人。",
  actions:["先穩住自己，再對團隊發言","授權前線並給予信任，不微管理","私下釋放壓力，公開保持穩定"],
  avoid:["在團隊面前慌亂、遷怒","危機時頻繁插手細節"],
  script:"狀況我掌握了，你們照分工處理，每兩小時更新一次，有需要我出面隨時說。",
  kw:["壓力","危機","緊急","焦慮","慌","截止","deadline","客訴","情緒","崩潰","微管理","授權","趕","爆炸","做不完","工作量","過勞","爆量","忙不過來","加班","好累","很累"]},
 {id:"chaocuo",title:"晁錯削藩",src:"漢紀・景帝三年",cat:["推動變革","危機壓力"],
  story:"晁錯力主削藩，諸侯怨聲四起。父親勸他：「削諸侯、疏骨肉，怨聲這麼多，何必呢？」晁錯說：「不這樣，天子不尊。」父親歎：「劉氏安了，晁氏卻危了。」不久七國以誅晁錯為名起兵，景帝為求息兵，將他斬於東市。",
  quote:"劉氏安矣，而晁氏危矣。",
  lesson:"對的事也要用對的方法。沒有盟友、沒有保護就衝在最前面，容易成為犧牲品。",
  actions:["先盤點利害關係人，找到支持者","分階段推進，先拿下小勝","確認主管在壓力下會支持你，並留下書面授權"],
  avoid:["一個人衝在最前面得罪所有人","以為「我是對的」就足夠"],
  script:"這個改革方向我認同，但想先確認：若其他部門反彈，我們由誰出面說明？",
  kw:["改革","得罪人","黑鍋","犧牲","當槍使","推動","阻力","反彈","孤立","衝太快","變革","專案","擋"]},
 {id:"hongmen",title:"鴻門宴",src:"漢紀・高帝元年",cat:["危機壓力","衝突化解"],
  story:"項羽要攻打劉邦，項伯連夜告知張良。劉邦透過項伯表達善意，隔天親赴鴻門謝罪：「是小人之言，讓將軍與我有了嫌隙。」宴中范增屢示意殺他、項莊舞劍，樊噲闖帳護主，劉邦藉如廁脫身。",
  quote:"今者有小人之言，令將軍與臣有郤。",
  lesson:"處於弱勢時，放低姿態、主動澄清，並借助雙方都信任的中間人化解危機。",
  actions:["主動求見澄清，不等誤會發酵","先請雙方都信任的人傳達善意","在情緒高點時不硬拚，保留退路"],
  avoid:["硬碰硬證明自己沒錯","把衝突擴大到更多人"],
  script:"我聽說您對上次的事有些疑慮，想當面說明我的出發點，也聽聽您的看法。",
  kw:["誤會","強勢","被誤解","澄清","化解","鬥爭","派系","站隊","得罪主管","高層","不高興","冤枉","誤解我","被誤會","背黑鍋","栽贓"]},
 {id:"lisi",title:"諫逐客書",src:"秦紀・始皇帝十年",cat:["向上管理","職涯成長"],
  story:"秦國宗室主張驅逐所有外國來的客卿，李斯也在名單中。他上書：「泰山不讓土壤，故能成其大；河海不擇細流，故能就其深。」說明驅逐人才只會資助敵國。秦王撤回逐客令，恢復李斯官職。",
  quote:"泰山不讓土壤，故能成其大。",
  lesson:"被排擠時不訴委屈，而用對方在乎的利益說明你的價值。",
  actions:["用對方在乎的目標（業績、風險、競爭）說明你的價值","具體列出貢獻與數據","保持專業語氣，不抱怨"],
  avoid:["情緒化地訴苦","攻擊排擠你的人"],
  script:"我負責的這塊去年帶來的成果是……如果調整，建議先評估對交期的影響。",
  kw:["空降","外來","被排擠","裁員","邊緣化","不被接納","跨部門","證明自己","被調走","資遣","外人"]},
 {id:"fangdu",title:"房謀杜斷",src:"唐紀・太宗",cat:["同事協作"],
  story:"唐太宗與房玄齡商議政事，常說「非杜如晦不能決」；杜如晦來了，最後多採用房玄齡的方案。房玄齡善於謀劃，杜如晦長於決斷，兩人同心輔政，史稱賢相。",
  quote:"玄齡善謀，如晦能斷。",
  lesson:"同事各有所長，把差異變成互補，比互相競爭更有力。",
  actions:["明確分工：誰負責發想、誰負責拍板","公開肯定對方的強項","把風格差異當成彼此的檢查機制"],
  avoid:["要求對方用你的方式做事","把搭檔當成競爭對手"],
  script:"你比較擅長把方案收斂，我先列出幾個方向，最後由你幫忙定案好嗎？",
  kw:["合作","搭檔","分工","風格不同","互補","個性不合","競爭","團隊合作","夥伴","協調","配合","不做事","丟給我","推給我","偷懶","搭便車","雷隊友","分配不均","都我在做"]},
 {id:"zhangshizhi",title:"張釋之守法",src:"漢紀・文帝",cat:["向上管理","衝突化解"],
  story:"漢文帝出行，有人從橋下跑出驚了御馬。廷尉張釋之依法判罰金，文帝大怒：「這人驚了我的馬，竟只罰錢！」張釋之說：「法律是天子與天下人共同遵守的。依法如此卻要加重，百姓就不再相信法律了。」文帝沉默良久，說：「廷尉判得對。」",
  quote:"法者，天子所與天下公共也。",
  lesson:"主管用情緒或罪惡感施壓時，把對話拉回規則與事實，溫和而堅定地守住界線。",
  actions:["先承接情緒（「我理解您很急」），再回到規則、數據與流程","把拒絕說成「保護團隊與公司」，而不是個人不配合","重要要求事後用 Email 確認，留下書面紀錄"],
  avoid:["被罪惡感推著答應不合理的要求","情緒對情緒，當場頂撞"],
  script:"我理解您的壓力。照規定這樣做會有風險，我建議改用另一個方案，您看可以嗎？",
  kw:["情緒勒索","勒索","施壓","罪惡感","愧疚","被逼","逼我","情緒化","發脾氣","罵人","不合理","拒絕","界線","不敢拒絕","說不出口","不知感恩","對不起公司","沒良心","硬要","強迫","不是我的工作","分外","職責外","額外","叫我做","硬塞"]},
 {id:"hanxin",title:"韓信請立假王",src:"漢紀・高帝四年",cat:["帶領團隊","危機壓力"],
  story:"劉邦被項羽圍困，韓信剛平定齊地，卻派人來要求封自己為「代理齊王」。劉邦大罵，張良、陳平暗中踩他的腳，附耳說：「現在情勢不利，擋得住他嗎？不如順勢立他，好好待他。」劉邦醒悟，改口說：「大丈夫平定諸侯，要當就當真王！」隨即派張良去封韓信。",
  quote:"不如因而立之，善遇之，使自為守。",
  lesson:"組員在關鍵時刻談條件或拿離職要脅時，先穩住，分清情緒與真正需求；不在當下撕破臉，事後補上制度。",
  actions:["先暫停，不在怒氣中回覆","問清楚背後真正的需求：認可、薪資、職稱或工作量","能給的爽快給，不能給的說明原因與時程","事後建立備援與交接，降低對單一人的依賴"],
  avoid:["當眾發火或情緒性拒絕","口頭答應卻不兌現，或一再讓步，讓要脅變成習慣"],
  script:"我知道你很在意這件事。我們找時間把需求具體談清楚，我週五前給你明確答覆。",
  kw:["組員","要脅","不幹了","談條件","加薪","職稱","擺爛","不配合","拿翹","只有他會","情緒勒索","勒索","威脅要走","撂話","攤牌","要離職","提離職","說要走"]},
 {id:"tuichixin",title:"推赤心置人腹中",src:"漢紀・更始二年",cat:["帶領團隊"],
  story:"劉秀收降銅馬軍，降將仍惶惶不安。劉秀明白他們的心思，下令各自回營帶兵，自己只帶輕騎巡視各營。降兵互相說：「蕭王把一片赤誠放進別人心裡，我們怎能不為他效死！」從此人心歸附。",
  quote:"蕭王推赤心置人腹中，安得不投死乎！",
  lesson:"組員不安、抱怨或鬧情緒時，用信任和行動安定人心，而不是用控制壓下去。",
  actions:["一對一聽組員的擔心，不急著反駁","用具體行動表達信任：授權、讓他負責一塊","主管親自到現場，讓團隊看見你在"],
  avoid:["用加強監控或威脅壓住情緒","在背後議論鬧情緒的組員"],
  script:"最近大家壓力很大，我想先聽聽你最擔心的是什麼，我能幫上的一定處理。",
  kw:["鬧情緒","抱怨","不安","士氣","負能量","不信任","人心","低落","消極","心情不好","合併","被併","新成員","不開心","哭"]}
];

const CAT_HINTS = {
  "向上管理":["主管","老闆","上司","經理","長官","高層"],
  "同事協作":["同事","同儕","夥伴","別組","其他部門"],
  "衝突化解":["衝突","吵","不合","誤會","敵意"],
  "帶領團隊":["部屬","下屬","團隊","組員","帶人","管理"],
  "推動變革":["改革","新制度","推動","流程","改變"],
  "功勞名聲":["功勞","搶功","績效","考核","名聲"],
  "危機壓力":["壓力","危機","緊急","焦慮"],
  "職涯成長":["學習","成長","轉職","升遷","瓶頸"]
};

const SENSITIVE = ["pua","精神暴力","人身攻擊","霸凌","性騷擾","騷擾","威脅","暴力","憂鬱","自殺","違法","吃案","職災","不給加班費","欠薪"];

/**
 * 通鑑職場錦囊 LINE 機器人（Google Apps Script）
 * 設定步驟見同資料夾 README.md。
 * 指令碼屬性需設定：LINE_CHANNEL_ACCESS_TOKEN
 */

const COLOR = { accent: "#2A6A5C", seal: "#AD3A2D", ink: "#1B2420", muted: "#56635D", soft: "#E0ECE7", warn: "#8A5A00", warnSoft: "#FBF1DC" };
const GREETINGS = /^(你好|您好|嗨|哈囉|安安|早安|午安|晚安|謝謝|感謝|hi|hello|hey|thanks?)[!！。.~～\s]*$/i;
const SENS_TEXT = "⚠️ 你描述的狀況可能涉及霸凌、騷擾、違法或身心健康。故事只能當處世參考，請先保留紀錄（時間、對話、證據），並向人資、工會、勞工主管機關或專業諮詢管道求助。";
const HELP_WORDS = ["選單", "說明", "怎麼用", "help", "開始", "?", "？"];
const byId = {};
STORIES.forEach(function (s) { byId[s.id] = s; });

/* ---------- LINE 入口 ---------- */
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  (body.events || []).forEach(function (ev) {
    try { handleEvent(ev); } catch (err) { console.error(err); }
  });
  return ContentService.createTextOutput("OK");
}

function handleEvent(ev) {
  if (!ev.replyToken) return;
  if (ev.type === "follow") return reply(ev.replyToken, helpMessages(true));
  if (ev.type !== "message" || ev.message.type !== "text") {
    return reply(ev.replyToken, [withQuick({ type: "text", text: "請用文字描述你在職場遇到的狀況，我會從《資治通鑑》裡找對應的故事給你建議。" })]);
  }
  reply(ev.replyToken, route(ev.message.text.trim()));
}

/* ---------- 路由（純函式，可離線測試） ---------- */
function route(text) {
  if (!text || HELP_WORDS.indexOf(text.toLowerCase()) >= 0) return helpMessages(false);
  if (CATS.indexOf(text) >= 0) return categoryMessages(text);
  const m = text.match(/^看[:：\s]*(.+)$/);
  const title = m ? m[1].trim() : text;
  const hit = STORIES.filter(function (s) { return s.title === title; })[0];
  if (hit) return adviceMessages(hit, "這則故事屬於「" + hit.cat.join("、") + "」情境。", relatedFor(hit, []), false);
  if (GREETINGS.test(text)) return helpMessages(false);
  const a = analyse(text);
  if (!a.scored.length) return fallbackMessages(a.topCats, a.sensitive);
  const main = a.scored[0].s;
  return adviceMessages(main, diagnosisText(a.topCats, main), relatedFor(main, a.scored.slice(1, 3).map(function (x) { return x.s.id; })), a.sensitive);
}

function analyse(q) {
  const text = q.toLowerCase();
  const catScore = {};
  CATS.forEach(function (c) { catScore[c] = 0; });
  Object.keys(CAT_HINTS).forEach(function (c) { CAT_HINTS[c].forEach(function (w) { if (text.indexOf(w) >= 0) catScore[c] += 1; }); });
  const scored = STORIES.map(function (s) {
    let sc = 0; const hits = [];
    s.kw.forEach(function (k) { if (text.indexOf(k.toLowerCase()) >= 0) { sc += 2; hits.push(k); } });
    s.cat.forEach(function (c) { sc += catScore[c] * 0.6; });
    return { s: s, sc: sc, hits: hits };
  }).filter(function (x) { return x.hits.length > 0; }).sort(function (a, b) { return b.sc - a.sc; });
  scored.forEach(function (x) { x.s.cat.forEach(function (c) { catScore[c] += x.hits.length; }); });
  const topCats = CATS.filter(function (c) { return catScore[c] > 0; }).sort(function (a, b) { return catScore[b] - catScore[a]; }).slice(0, 2);
  const sensitive = SENSITIVE.some(function (w) { return text.indexOf(w) >= 0; });
  return { scored: scored, topCats: topCats, sensitive: sensitive };
}

function diagnosisText(topCats, main) {
  if (!topCats.length) return "從描述看不出明確的情境，先提供最接近的一則。補充「對象是誰、發生什麼事、你希望的結果」會更準確。";
  return "你的問題主要落在「" + topCats[0] + "」" + (topCats[1] ? "，也牽涉「" + topCats[1] + "」" : "") + "。最能對照的是「" + main.title + "」。";
}

function relatedFor(main, ids) {
  const out = ids.filter(function (id) { return id !== main.id; }).slice(0, 2);
  STORIES.forEach(function (s) {
    if (out.length < 2 && s.id !== main.id && out.indexOf(s.id) < 0 && s.cat.some(function (c) { return main.cat.indexOf(c) >= 0; })) out.push(s.id);
  });
  return out;
}

/* ---------- 訊息組裝 ---------- */
function quickItems(relatedIds) {
  const items = (relatedIds || []).map(function (id) { return qr("看：" + byId[id].title); });
  CATS.forEach(function (c) { items.push(qr(c)); });
  items.push(qr("選單"));
  return items.slice(0, 13);
}
function qr(label) { return { type: "action", action: { type: "message", label: label.slice(0, 20), text: label } }; }
function withQuick(msg, relatedIds) { msg.quickReply = { items: quickItems(relatedIds) }; return msg; }

function txt(text, o) {
  const t = { type: "text", text: text, wrap: true, size: "sm", color: COLOR.ink };
  Object.keys(o || {}).forEach(function (k) { t[k] = o[k]; });
  return t;
}
function bullets(items, mark, markColor) {
  return items.map(function (i) {
    return { type: "box", layout: "baseline", spacing: "sm", contents: [
      txt(mark, { flex: 0, color: markColor, weight: "bold" }), txt(i, { flex: 1 })] };
  });
}
function section(label, contents) {
  return { type: "box", layout: "vertical", spacing: "sm", margin: "lg",
    contents: [txt(label, { size: "xs", color: COLOR.muted, weight: "bold" })].concat(contents) };
}

function adviceBubble(s, diag) {
  return {
    type: "bubble", size: "giga",
    header: { type: "box", layout: "vertical", spacing: "xs", paddingBottom: "none", contents: [
      txt("資治通鑑・" + s.src, { size: "xs", color: COLOR.seal, weight: "bold" }),
      txt(s.title, { size: "xl", weight: "bold" })] },
    body: { type: "box", layout: "vertical", contents: [
      txt(diag, { color: COLOR.accent, weight: "bold" }),
      { type: "separator", margin: "md" },
      txt(s.story, { margin: "md", color: COLOR.muted }),
      txt("「" + s.quote.replace(/[「」]/g, "") + "」", { margin: "sm", weight: "bold", color: COLOR.seal }),
      { type: "box", layout: "vertical", margin: "md", paddingAll: "md", cornerRadius: "md", backgroundColor: COLOR.soft,
        contents: [txt("啟示：" + s.lesson)] },
      section("建議這樣做", bullets(s.actions, "✓", COLOR.accent)),
      section("避免", bullets(s.avoid, "✕", COLOR.seal)),
      section("可以這樣說", [{ type: "box", layout: "vertical", paddingAll: "md", cornerRadius: "md", borderWidth: "1px", borderColor: "#D3DCD7",
        contents: [txt("「" + s.script + "」")] }])
    ] }
  };
}

function adviceMessages(s, diag, relatedIds, sensitive) {
  const msgs = [];
  if (sensitive) msgs.push({ type: "text", text: SENS_TEXT });
  msgs.push(withQuick({ type: "flex", altText: "通鑑錦囊：" + s.title + "－" + s.lesson, contents: adviceBubble(s, diag) }, relatedIds));
  return msgs;
}

function fallbackMessages(topCats, sensitive) {
  const msgs = [];
  if (sensitive) msgs.push({ type: "text", text: SENS_TEXT });
  if (topCats.length) {
    msgs.push({ type: "text", text: "看起來和「" + topCats[0] + "」有關，但描述還不夠具體。\n\n補充「對象是誰、發生什麼事、你希望的結果」，我能找得更準。先給你這類情境的故事 👇" });
    msgs.push(categoryMessages(topCats[0])[0]);
  } else {
    msgs.push(withQuick({ type: "text", text: "這句話裡沒有找到可以對應的情境 🤔\n\n試著描述「對象是誰、發生什麼事、你希望的結果」，例如：\n・同事把工作都丟給我\n・主管當眾罵我\n・組員一直遲到\n\n或點下方按鈕，依情境挑故事。" }));
  }
  return msgs;
}

function storyCard(s) {
  return {
    type: "bubble", size: "kilo",
    body: { type: "box", layout: "vertical", spacing: "sm", contents: [
      txt(s.src, { size: "xxs", color: COLOR.seal, weight: "bold" }),
      txt(s.title, { size: "lg", weight: "bold" }),
      txt(s.lesson, { color: COLOR.muted })] },
    footer: { type: "box", layout: "vertical", contents: [
      { type: "button", style: "primary", color: COLOR.accent, height: "sm",
        action: { type: "message", label: "看完整建議", text: "看：" + s.title } }] }
  };
}

function categoryMessages(cat) {
  const list = STORIES.filter(function (s) { return s.cat.indexOf(cat) >= 0; });
  return [withQuick({ type: "flex", altText: "「" + cat + "」相關的通鑑故事", contents: { type: "carousel", contents: list.map(storyCard) } })];
}

function helpMessages(isWelcome) {
  const head = isWelcome ? "歡迎使用「通鑑職場錦囊」！\n\n" : "";
  return [withQuick({ type: "text", text: head +
    "直接用一兩句話描述你的職場狀況，例如：\n・剛升主管，原本的同事不太服我\n・同事在背後說我壞話\n・提案在會議上被否決\n\n我會從《資治通鑑》19 則故事中找出最對應的一則，給你行動建議和可以直接說的話。\n\n也可以點下方按鈕，依情境瀏覽故事。" })];
}

/* ---------- 呼叫 LINE API ---------- */
function reply(token, messages) {
  const accessToken = PropertiesService.getScriptProperties().getProperty("LINE_CHANNEL_ACCESS_TOKEN");
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", {
    method: "post", contentType: "application/json", muteHttpExceptions: true,
    headers: { Authorization: "Bearer " + accessToken },
    payload: JSON.stringify({ replyToken: token, messages: messages.slice(0, 5) })
  });
}

/* 在 Apps Script 編輯器手動執行，可在記錄中檢查回覆內容 */
function testRoute() {
  console.log(JSON.stringify(route("剛升主管，原本的同事不太服我"), null, 1).slice(0, 3000));
}
