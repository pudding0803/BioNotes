---
layout: default
title: Ribonucleic Acid (RNA)
---

# Ribonucleic Acid

[🎥 miRNA 的生合成與功能](https://www.youtube.com/watch?v=t5jroSCBBwk)

## 簡介

- 中文：核糖核酸
- 由[核苷酸](nucleotide)組成的一種[核酸](nucleic-acid)
- 通常以單鏈形式存在

## 名詞解釋

### non-coding RNA (ncRNA)

- 中文：非編碼 RNA
- 不會被[轉譯](translation)成蛋白質的 RNA 分子
- 一般來說除了 [mRNA](#messenger-rna) 之外都是 ncRNA

### small RNA (sRNA)

- 中文：小 RNA
- 長度小於 200 nt (核苷酸) 的 RNA 分子

## Translational RNA

> 與蛋白質合成相關

### <span id="messenger-rna">messenger RNA (mRNA)</span>

- 中文：信使 RNA
- 從 [DNA](deoxyribonucleic-acid) [轉錄](transcription)而來，攜帶著一段遺傳訊息
- 轉譯時由[核糖體](ribosome)讀取以合成蛋白質
- 最主要的 coding RNA

### <span id="transfer-rna">transfer RNA (tRNA)</span>

- 中文：轉運 RNA
- 屬於 ncRNA、sRNA
- 將特定的氨基酸帶到核糖體的 A 位點，讓核糖體可以合成多肽鏈
- 結構包含
    - 反密碼子 (anticodon)
        - 一段長度為三的核苷酸序列
        - 與位於核糖體小亞基中 A 位點的 mRNA 密碼子 (codon) 配對
    - CCA tail
        - 位於 tRNA 3' 端的 CCA 核苷酸序列
        - 是在轉錄後才由 tRNA 核苷轉移酶 (tRNA nucleotidyltransferase) 添加
        - 讓氨酰-tRNA 合成酶 (aminoacyl-tRNA synthetase) 附著氨基酸的位置
- 詳見 [🔗Translation](translation)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/TRNA-Phe_yeast_1ehz.png/800px-TRNA-Phe_yeast_1ehz.png" alt="tRNA"
     data-zoom="0.35" data-caption="黑色部分為反密碼子，而黃色部分為 CCA tail" />

### <span id="ribosomal-rna">ribosomal RNA (rRNA)</span>

- 中文：核糖體 RNA
- 屬於 ncRNA、sRNA
- 核糖體的主要成分
- 主要功能
    - 核糖體的結構支撐
    - 轉譯過程的催化作用

## Regulatory RNA

> 與轉錄後修飾或 DNA 複製相關

### microRNA (miRNA)

- 中文：小分子 RNA、微 RNA
- 屬於 ncRNA、sRNA
- 與 RNA silencing 有關，能夠抑制特定的 mRNA
- 生合成過程
    - 從基因中轉錄出 primary microRNA (pri-miRNA) 並形成[莖環](stem-loop)
    - DGCR8 蛋白辨識出 pri-miRNA，並與 <abbr title="一種 RNA 酶 III (Ribonuclease III)">Drosha</abbr> 組合形成 microprocessor complex，將 pri-miRNA 切割成 precursor microRNA (pre-miRNA)
    - 透過 <abbr title="一種核轉運蛋白 (karyopherins)，負責細胞質與細胞核之間的運輸">Exportin-5</abbr> 的協助從核孔離開前往細胞質
    - <abbr title="一種 RNA 酶 III (Ribonuclease III)">Dicer</abbr> 切割掉 miRNA 的環狀部分與周圍序列（使其後續能夠解旋成兩個單鏈 RNA 分子），此時為 mature miRNA
    - AGO2 蛋白協助 miRNA 進行解旋，領先股、AGO2、和其他蛋白一同形成 RISC (RNA induced silencing complex)，而延遲股通常被降解
- RISC 主要功能
    - 抑制轉譯：透過 miRNA 與 target mRNA 的結合，使 RISC 得以妨礙核糖體在 mRNA 上的移動，進而抑制轉譯
    - 降解 mRNA：當 miRNA 與 target mRNA 具有高度互補性時，RISC 能夠利用內切酶活性將 mRNA 切割，進而導致其被降解

<img src="https://www.researchgate.net/publication/357458980/figure/fig1/AS:1117439114915840@1643429654848/Biogenesis-of-miRNAs-A-A-miRNA-is-transcribed-into-pri-miRNA-by-Pol-II-B.ppm" alt="Biogenesis of miRNA" data-zoom="0.6" />

### small interfering RNA (siRNA)

- 中文：小干擾 RNA
- 屬於 ncRNA、sRNA

### PIWI-interacting RNA (piRNA)

- 中文：PIWI 相互作用 RNA
- 屬於 ncRNA、sRNA

### small nuclear RNA (snRNA)

- 中文：小核 RNA
- 屬於 ncRNA、sRNA

### small nucleolar RNA (snoRNA)

- 中文：小核仁 RNA
- 屬於 ncRNA、sRNA
