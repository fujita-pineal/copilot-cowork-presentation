---
theme: default
title: Copilot Cowork登場！
author: 藤田 拳
colorSchema: light
transition: slide-left
aspectRatio: '16/9'
canvasWidth: 980
download: true
exportFilename: copilot-cowork-presentation-animated
duration: '40min'
wakeLock: true
fonts:
  sans: 'Noto Sans JP'
  mono: 'Fira Code'
  weights: '300,400,500,600,700,800,900'
  provider: google
---

<!-- Slide 1: タイトル -->

<div class="h-full flex flex-col items-center justify-center text-center px-12">

<div class="flex items-center gap-8 mb-8 anim-slide-down">
  <img src="/pineal-logo-dark.png" class="h-10" />
  <span class="text-[#E1E1E1] text-2xl font-light">×</span>
  <img src="/microsoft-copilot-logo.png" class="h-10" />
  <span class="text-[#E1E1E1] text-2xl font-light">×</span>
  <img src="/anthropic-claude-logo.png" class="h-10" />
</div>

<span class="badge badge-dark mb-6 text-sm anim-pop delay-2">2026.3.25 LIVE</span>

<h1 class="!text-6xl !font-black !leading-tight !mb-4 anim-slide-up delay-3 dur-slow">
  <span class="text-brand">Copilot Cowork</span> 登場！
</h1>

<p class="text-xl text-main font-medium mb-2 anim-fade delay-5">
  仕事を「丸投げ」できるAIが Microsoftにやってきた
</p>

<p class="text-sub text-base mb-10 anim-fade delay-6">〜 実演ワークショップ 〜</p>

<div class="flex items-center gap-4 anim-slide-up delay-7">
  <img src="/fujita-profile.jpg" class="w-16 h-16 rounded-full object-cover border-2 border-[#E1E1E1]" />
  <div class="text-left">
    <div class="text-base font-bold">藤田 拳</div>
    <div class="text-sm text-sub">株式会社ピネアル CTO</div>
  </div>
</div>

</div>

<!--
みなさん、こんにちは。ピネアルの藤田です。
今日は「Copilot Cowork」という、Microsoftが発表した新しいAI体験についてお話しします。
-->

---

<!-- Slide 2: アジェンダ -->

<div class="px-12 py-6">

<p class="badge badge-dark mb-3 text-sm anim-slide-left">AGENDA</p>

<h1 class="!text-4xl !mb-8 anim-slide-left delay-1">本日の流れ</h1>

<div class="grid grid-cols-2 gap-5">

<div v-click class="card flex gap-5 items-start">
  <div class="text-4xl font-black text-brand opacity-30 font-[Work_Sans] shrink-0">01</div>
  <div>
    <h3 class="text-lg font-bold mb-1">Copilotの現在地</h3>
    <p class="text-sm text-sub leading-relaxed">進化の歴史、料金体系、無料vs有料</p>
    <span class="text-sm text-brand font-semibold mt-2 inline-block">8min</span>
  </div>
</div>

<div v-click class="card flex gap-5 items-start">
  <div class="text-4xl font-black text-brand opacity-30 font-[Work_Sans] shrink-0">02</div>
  <div>
    <h3 class="text-lg font-bold mb-1">Copilot Coworkとは</h3>
    <p class="text-sm text-sub leading-relaxed">スケジュール、仕組み、MSデモ紹介</p>
    <span class="text-sm text-brand font-semibold mt-2 inline-block">8min</span>
  </div>
</div>

<div v-click class="card flex gap-5 items-start">
  <div class="text-4xl font-black text-brand opacity-30 font-[Work_Sans] shrink-0">03</div>
  <div>
    <h3 class="text-lg font-bold mb-1">【実演】Claude Coworkデモ</h3>
    <p class="text-sm text-sub leading-relaxed">AIが仕事を実行する様子をライブで</p>
    <span class="text-sm text-brand font-semibold mt-2 inline-block">15min</span>
  </div>
</div>

<div v-click class="card flex gap-5 items-start">
  <div class="text-4xl font-black text-brand opacity-30 font-[Work_Sans] shrink-0">04</div>
  <div>
    <h3 class="text-lg font-bold mb-1">まとめ・研修紹介・Q&A</h3>
    <p class="text-sm text-sub leading-relaxed">5月に向けた準備、ピネアル研修</p>
    <span class="text-sm text-brand font-semibold mt-2 inline-block">9min</span>
  </div>
</div>

</div>

</div>

<!--
4つのパートで進めます。
まずCopilotの全体像を整理し、Coworkの仕組みを解説。
そして実際にAIが仕事をする様子をライブでお見せします。
-->

---
transition: slide-up
---

<!-- Slide 3: Copilotの進化 -->

<div class="px-12 py-4">

<div class="flex justify-between items-start mb-3">
  <div>
    <div class="flex items-center gap-2 mb-2 anim-slide-left">
      <span class="badge badge-dark text-sm">PART 1</span>
      <span class="text-sm text-sub tracking-widest uppercase">History</span>
    </div>
    <h1 class="!text-4xl !mb-2 anim-slide-left delay-1">Copilot の進化</h1>
    <p class="text-sub text-base anim-fade delay-2">2023年の登場から3年。皆さんが使っているCopilotは、今どこにいるか。</p>
  </div>
  <img src="/microsoft-copilot-logo.png" class="h-10 opacity-60 shrink-0 ml-4" />
</div>

<div class="mt-2 mb-4 anim-scale delay-3 dur-slow">
  <img src="/A_timeline.drawio.png" class="w-full rounded-lg" />
</div>

<div v-click class="flex gap-4 justify-center">
  <span class="badge bg-[#F6F8FA] text-main text-sm">Wave 1: アプリ統合</span>
  <span class="badge bg-[#F6F8FA] text-main text-sm">Wave 2: エージェント</span>
  <span class="badge badge-red text-sm font-bold">Wave 3: Cowork</span>
</div>

</div>

<!--
2023年の発表から3年。Wave 1でアプリに統合され、Wave 2でエージェント機能。
そして今年2026年3月、Wave 3としてCopilot Coworkが発表されました。
-->

---
transition: slide-left
---

<!-- Slide 4: 料金体系 -->

<div class="px-12 py-4">

<div class="flex justify-between items-start mb-4">
  <div>
    <p class="badge badge-dark mb-2 text-sm anim-slide-left">PRICING</p>
    <h1 class="!text-4xl !mb-2 anim-slide-left delay-1">Copilot 料金体系</h1>
    <p class="text-sub text-sm anim-fade delay-2">意外と知らない、プランごとの違い。2026年3月時点。</p>
  </div>
  <img src="/microsoft-logo.png" class="h-6 opacity-60 shrink-0 ml-4" />
</div>

<table class="styled-table mt-2 text-base">
  <thead>
    <tr>
      <th>プラン</th>
      <th>月額/ユーザー</th>
      <th>含まれるもの</th>
    </tr>
  </thead>
  <tbody>
    <tr v-click>
      <td>Copilot Chat（無料）</td>
      <td>M365に含む</td>
      <td>Webデータベースのチャット。社内データ参照不可</td>
    </tr>
    <tr v-click>
      <td>Copilot Business</td>
      <td>$21（プロモ$18）</td>
      <td>300名以下。M365アプリ統合、Graph連携</td>
    </tr>
    <tr v-click>
      <td>Copilot Enterprise</td>
      <td>$30</td>
      <td>E3/E5に追加。Graph連携、Purview</td>
    </tr>
    <tr v-click>
      <td>Agent 365</td>
      <td>$15</td>
      <td>エージェント機能のみ追加</td>
    </tr>
    <tr v-click class="highlight">
      <td class="font-bold">M365 E7 Frontier Suite</td>
      <td class="font-bold">$99</td>
      <td class="font-bold">E5 + Copilot + Agent 365 + Cowork。5/1 GA</td>
    </tr>
  </tbody>
</table>

<div v-after class="card-bordered mt-4 text-center">
  <p class="text-base font-bold">Coworkを使うには <span class="text-brand text-xl font-black">E7（$99/user/月）</span> が必要</p>
</div>

</div>

<!--
料金体系を整理します。
重要なのは一番下のE7。$99/user/月で、Coworkを含む全機能がバンドルされています。
-->

---
layout: center
class: text-center
transition: fade
---

<!-- Slide 5: 扉絵 PART 2 -->

<div>

<img src="/microsoft-copilot-logo.png" class="h-14 opacity-40 mx-auto mb-8 anim-slide-down" />

<span class="badge badge-dark mb-8 inline-block text-sm anim-pop delay-2">PART 2</span>

<h1 class="!text-6xl !font-black !leading-tight !mb-6 anim-slide-up delay-3 dur-slow">
  Copilot <span class="text-brand">Cowork</span> とは
</h1>

<p class="text-2xl text-sub font-light anim-fade delay-5">チャットの次の時代</p>

</div>

<!--
ここからPart 2。Copilot Coworkとは何なのか、詳しく見ていきましょう。
-->

---
layout: center
class: text-center
transition: fade
---

<!-- Slide 6: まだ使えません -->

<div>

<h1 class="!text-7xl !font-black text-brand !leading-tight !mb-10 anim-bounce">
  まだ使えません。
</h1>

<div v-click>
  <p class="text-3xl text-main">
    一般提供は <span class="font-black text-4xl">2026年5月1日</span>
  </p>
  <p class="text-sub text-lg mt-8">E7（$99/user/月）が必要</p>
</div>

</div>

<!--
ただし、まだ使えません。一般提供は5月1日。E7ライセンスが必要です。
今日はその先取りをします。
-->

---
transition: slide-left
---

<!-- Slide 7: 今のCopilotと何が違う？ -->

<div class="px-12 py-6">

<div class="flex justify-between items-start mb-6">
  <h1 class="!text-4xl anim-slide-left">今のCopilotと何が違う？</h1>
  <img src="/microsoft-copilot-logo.png" class="h-10 opacity-60 shrink-0 ml-4" />
</div>

<table class="styled-table text-lg">
  <thead>
    <tr>
      <th class="w-1/4"></th>
      <th class="w-[37.5%]">今のCopilot</th>
      <th class="w-[37.5%] text-brand font-bold">Copilot Cowork</th>
    </tr>
  </thead>
  <tbody>
    <tr v-click>
      <td class="font-semibold">やりとり</td>
      <td>1回ずつチャット</td>
      <td class="compare-highlight">タスクを丸投げ</td>
    </tr>
    <tr v-click>
      <td class="font-semibold">範囲</td>
      <td>1つのアプリ内</td>
      <td class="compare-highlight">M365全体をまたぐ</td>
    </tr>
    <tr v-click>
      <td class="font-semibold">あなたの役割</td>
      <td>毎回指示する</td>
      <td class="compare-highlight">確認するだけ</td>
    </tr>
  </tbody>
</table>

<div v-click class="mt-10 text-center">
  <p class="text-2xl">
    チャットで聞く → <span class="text-brand font-black text-3xl">仕事を丸投げする</span>
  </p>
</div>

</div>

<!--
比較するとわかりやすい。
今のCopilotは1回1回チャットで指示する。Coworkはタスクを丸投げして、確認するだけ。
パラダイムが変わります。
-->

---
transition: slide-up
---

<!-- Slide 8: どういう仕組み？ -->

<div class="px-12 py-4">

<div class="flex justify-between items-start mb-2">
  <div>
    <h1 class="!text-3xl !mb-1 anim-slide-left">どういう仕組み？</h1>
    <p class="text-lg font-medium anim-fade delay-1">Claudeが考える。M365が動く。</p>
  </div>
  <div class="flex items-center gap-3 shrink-0 ml-4">
    <img src="/microsoft-logo.png" class="h-6 opacity-60" />
    <span class="text-[#E1E1E1] text-lg">×</span>
    <img src="/anthropic-claude-logo.png" class="h-6 opacity-60" />
  </div>
</div>

<div class="mt-2 flex justify-center anim-scale delay-2 dur-slow">
  <img src="/B_architecture.drawio.png" class="w-full max-h-[370px] object-contain rounded-lg" />
</div>

</div>

<!--
仕組みはこうです。Claudeが推論エンジンとして「考え」、M365のアプリ群が「動く」。
Work IQでメール、ファイル、会議すべてのコンテキストを使います。
-->

---
transition: slide-left
---

<!-- Slide 9: ユースケース - 会議準備を丸投げ -->

<div class="px-12 py-4">

<div class="flex items-center gap-2 mb-2 anim-slide-left">
  <span class="badge badge-red text-sm">Microsoft公式デモ</span>
</div>

<div class="flex justify-between items-start mb-2">
  <h1 class="!text-3xl !mb-1 anim-slide-left delay-1">例: 会議準備を丸投げ</h1>
  <img src="/microsoft-copilot-logo.png" class="h-8 opacity-60 shrink-0 ml-4" />
</div>

<p class="text-sub text-base mb-4 anim-fade delay-2">メール・過去の議事録・ファイルを集めて、ブリーフィング資料を自動作成</p>

<div class="grid grid-cols-2 gap-6">
  <div v-click>
    <img src="/C_input-output-flow.drawio.png" class="w-full rounded-lg shadow-md" />
  </div>
  <div v-click>
    <p class="text-sm text-sub mb-2 font-semibold">Copilot Cowork画面</p>
    <img src="/copilot-cowork-triage-inbox.jpg" class="w-full rounded-lg shadow-md border border-[#E1E1E1]" />
  </div>
</div>

</div>

<!--
Microsoftが公式デモで見せたユースケースです。
メールや過去の会議録を集めて、ブリーフィング資料を自動作成。準備2時間が5分になる。
-->

---
layout: center
class: text-center
transition: fade
---

<!-- Slide 10: 扉絵 PART 3 デモ -->

<div>

<img src="/anthropic-claude-logo.png" class="h-12 opacity-40 mx-auto mb-8 anim-bounce" />

<span class="badge badge-dark mb-8 inline-block text-sm anim-pop delay-3">PART 3</span>

<h1 class="!text-5xl !font-black !leading-tight !mb-4 anim-slide-up delay-4 dur-slow">
  先取りデモ: <span class="text-brand">Claude Cowork</span>
</h1>

<p class="text-xl text-sub mt-3 mb-2 anim-fade delay-6">Copilot Coworkの頭脳 = Claude</p>

<p class="text-base text-sub anim-fade delay-7">AIがPCを操作して仕事をする様子を、今日先取りで体験</p>

</div>

<!--
ここからが今日のメインです。Copilot Coworkの頭脳であるClaudeを使って、
実際にAIが仕事をする様子をお見せします。
-->

---
transition: slide-left
---

<!-- Slide 11: デモシナリオ -->

<div class="px-12 py-4">

<div class="flex items-center gap-2 mb-3 anim-slide-left">
  <span class="badge badge-dark text-sm">DEMO SCENARIO</span>
</div>

<div class="flex justify-between items-start mb-3">
  <div>
    <h1 class="!text-3xl !mb-2 anim-slide-left delay-1">デモシナリオ</h1>
    <p class="text-sub text-base anim-fade delay-2">会議議事録 → アクションアイテム抽出 → Excelで進捗管理表を自動作成</p>
  </div>
  <img src="/anthropic-claude-logo.png" class="h-8 opacity-60 shrink-0 ml-4" />
</div>

<div class="grid grid-cols-3 gap-6 mt-6">
  <div v-click class="step-card py-6">
    <div class="step-number mb-3">STEP 1</div>
    <div class="text-4xl mb-3">📄</div>
    <h3 class="text-base font-bold mb-2">議事録を渡す</h3>
    <p class="text-sm text-sub">会議議事録テキストを<br>Claude Coworkに入力</p>
  </div>
  <div v-click class="step-card py-6">
    <div class="step-number mb-3">STEP 2</div>
    <div class="text-4xl mb-3">🔍</div>
    <h3 class="text-base font-bold mb-2">アクション抽出</h3>
    <p class="text-sm text-sub">担当者・期限付きの<br>アクションアイテムを自動抽出</p>
  </div>
  <div v-click class="step-card active py-6">
    <div class="step-number mb-3">STEP 3</div>
    <div class="text-4xl mb-3">📊</div>
    <h3 class="text-base font-bold mb-2">Excel管理表を作成</h3>
    <p class="text-sm text-sub">進捗管理表をExcelに自動出力<br>条件付き書式・ステータス列付き</p>
  </div>
</div>

<div v-after class="mt-6 text-center">
  <span class="badge badge-live text-base">LIVE DEMO START</span>
</div>

</div>

<!--
デモのシナリオです。3ステップ。
議事録を渡して、アクションアイテムを抽出、最後にExcelの管理表を自動作成します。
-->

---
layout: center
class: text-center
transition: fade
---

<!-- Slide 12: ライブデモ中 -->

<div>

<img src="/anthropic-claude-logo.png" class="h-10 opacity-30 mx-auto mb-6 anim-fade" />

<span class="badge badge-live mb-8 inline-block text-base anim-pop delay-2">LIVE DEMO</span>

<div class="text-7xl mb-8 anim-bounce delay-3">🎬</div>

<p class="text-2xl text-sub anim-slide-up delay-4">Claude Coworkで</p>

<h1 class="!text-5xl !font-black !leading-tight !my-3 anim-slide-up delay-5 dur-slow">
  議事録 → Excel管理表
</h1>

<p class="text-2xl text-sub anim-fade delay-7">を実演中</p>

</div>

<!--
（ライブデモ実施中）
-->

---
transition: slide-left
---

<!-- Slide 13: ピネアル Copilot研修 -->

<div class="px-12 py-4">

<div class="flex justify-between items-start mb-3">
  <div>
    <p class="badge badge-dark mb-2 text-sm anim-slide-left">TRAINING</p>
    <h1 class="!text-3xl !mb-2 anim-slide-left delay-1">ピネアル Copilot研修</h1>
  </div>
  <img src="/pineal-logo-dark.png" class="h-7 opacity-80 shrink-0 ml-4" />
</div>

<div class="card-bordered mb-4 anim-fade delay-2">
  <p class="text-sm font-semibold">パナソニックグループ会社への提供実績あり</p>
</div>

<div class="grid grid-cols-3 gap-3 mb-4">
  <img src="/training-slide-cover.png" class="rounded-lg shadow-sm border border-[#E1E1E1] w-full h-auto anim-scale delay-2" />
  <img src="/training-slide-3points.png" class="rounded-lg shadow-sm border border-[#E1E1E1] w-full h-auto anim-scale delay-3" />
  <img src="/training-slide-copilot-steps.png" class="rounded-lg shadow-sm border border-[#E1E1E1] w-full h-auto anim-scale delay-4" />
</div>

<div class="grid grid-cols-3 gap-4">
  <div v-click class="feature-card">
    <div class="feature-icon text-3xl">🎯</div>
    <h3 class="text-sm font-bold mb-1">初心者から楽しく</h3>
    <p class="text-xs text-sub leading-relaxed">AIに苦手意識がある方でも<br>安心のステップバイステップ</p>
  </div>
  <div v-click class="feature-card">
    <div class="feature-icon text-3xl">💼</div>
    <h3 class="text-sm font-bold mb-1">実務に即したハンズオン</h3>
    <p class="text-xs text-sub leading-relaxed">実際の業務シナリオで<br>手を動かして体感する形式</p>
  </div>
  <div v-click class="feature-card">
    <div class="feature-icon text-3xl">🚀</div>
    <h3 class="text-sm font-bold mb-1">Cowork時代の先取り</h3>
    <p class="text-xs text-sub leading-relaxed">5月のCowork一般公開を<br>見据えたカリキュラム</p>
  </div>
</div>

</div>

<!--
ピネアルではCopilot研修を提供しています。
パナソニックグループ会社への実績もあります。
5月のCowork一般公開を見据えたカリキュラムです。
-->

---
transition: slide-up
---

<!-- Slide 14: 社内稟議のポイント -->

<div class="h-full flex flex-col items-center justify-center px-8">

<h1 class="!text-4xl !font-black text-brand !mb-6 text-center anim-slide-down">
  社内稟議のポイント
</h1>

<div class="max-w-4xl w-full anim-scale delay-2">
  <img src="/infographic-ai-evolution.png" class="w-full h-auto rounded-lg shadow-lg" />
</div>

</div>

---
layout: center
class: text-center
transition: fade
---

<!-- Slide 15: Thank You! -->

<div class="max-w-2xl mx-auto">

<h1 class="!text-7xl !font-black text-brand !leading-tight !mb-10 anim-bounce">
  Thank You!
</h1>

<div class="text-left space-y-4 mb-10">
  <div v-click class="flex gap-3 items-start">
    <span class="text-brand font-bold text-xl shrink-0">1.</span>
    <p class="text-lg">Copilot Coworkは <span class="font-bold">5月1日</span> から一般提供。今のうちに準備を。</p>
  </div>
  <div v-click class="flex gap-3 items-start">
    <span class="text-brand font-bold text-xl shrink-0">2.</span>
    <p class="text-lg">Claude Coworkで体感した通り、AIに<span class="font-bold text-brand">「丸投げ」</span>する働き方が現実に。</p>
  </div>
  <div v-click class="flex gap-3 items-start">
    <span class="text-brand font-bold text-xl shrink-0">3.</span>
    <p class="text-lg">ピネアルの研修で、Cowork時代に向けた実践スキルを身につけましょう。</p>
  </div>
</div>

<div v-click class="flex justify-center items-center gap-10">
  <div class="card inline-flex items-center gap-5 px-8 py-5">
    <img src="/fujita-profile.jpg" class="w-14 h-14 rounded-full object-cover border-2 border-[#E1E1E1]" />
    <div class="text-left">
      <div class="font-bold text-base">藤田 拳</div>
      <div class="text-sm text-sub">株式会社ピネアル CTO</div>
      <div class="text-sm text-brand">https://pineal.co.jp/</div>
    </div>
    <img src="/pineal-logo-dark.png" class="h-6 ml-3 opacity-60" />
  </div>
  <div class="text-center">
    <img src="/survey-qr.png" class="w-28 h-28 mx-auto" />
    <p class="text-xs text-sub mt-2">アンケートはこちら</p>
    <p class="text-xs text-brand font-semibold mt-3">特典で参加者限定の個別相談を予約できます</p>
  </div>
</div>

<p v-after class="text-sub text-base mt-6">ご質問をお待ちしています</p>

</div>

<!--
以上です。ありがとうございました。
ご質問があればお気軽にどうぞ。
-->
