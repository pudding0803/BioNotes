---
layout: default
title: Polymerase Chain Reaction
---

# Polymerase Chain Reaction (PCR)

## 簡介

* 中文：聚合酶連鎖反應
* 一種快速製備特定 DNA 樣本的方法
* 通常透過熱循環，使試劑重複加熱和冷卻

## 步驟

### 製備反應混合物（僅列主要材料）

* 模板 DNA
    * 通常是完整的雙鏈 DNA 分子，可能是基因組 DNA、質粒 DNA、cDNA 等
    * 包含目標 DNA 序列（target DNA）
* 兩種引子（primer）
    * 引子：短 DNA 片段，通常長度為 18 ~ 25 個核苷酸
    * 包含 forward primer 與 reverse primer，分別與目標 DNA 序列的 5' 端與 3' 端互補
    * 協助 DNA 聚合酶開始進行 DNA 合成
* DNA 聚合酶
    * 基本上都是使用熱穩定 DNA 聚合酶，例如 Taq 聚合酶
    * 若聚合酶是熱敏感的，會導致在[變性](#denaturation)步驟下永久失去活性，導致每個循環都要加入新的 DNA 聚合酶，使成本與耗時增加
* dNTPs
    * 四種去氧核苷酸（dATP、dCTP、dGTP、dTTP）用以合成 DNA 鏈
* 反應緩衝液
    * 提供適當的 pH 值和離子環境維持 DNA 聚合酶的活性，通常使用 $\ce{Mg^2+}$

### <span id="denaturation">Denaturation（變性）</span>

* 溫度：約 94 ~ 98 °C
* 目的：將 DNA 從雙鏈分離成單鏈
* 原理：破壞互補鹼基之間的氫鍵

### Annealing（退火）

* 溫度：約 50 ~ 65 °C
* 目的：引子與模板 DNA 結合
* 原理：精確調整溫度，使引子專一結合到目標序列上
* 溫度控制
    * 溫度過高可能導致引子不結合
    * 溫度過低可能導致引子與非目標 DNA 區段結合
    * 通常會根據引子的熔解溫度（Tm，melting temperature）調整溫度

### Extension（延伸）

* 溫度：約 72 °C
* 目的：DNA 聚合酶從引子開始合成新的互補 DNA 鏈
* 原理：DNA 聚合酶在此溫度下最活躍
* 合成結束
    * 聚合酶完成模板 DNA 的合成就會自動停止
    * 設定的時間結束後，溫度會再次升高到[變性](#denaturation)步驟，此時 DNA 聚合酶會暫時失去活性並脫落，因此合成終止
