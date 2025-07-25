# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-07-24)

<section class="features">

### Features

-   [`d2f83a4`](https://github.com/stdlib-js/stdlib/commit/d2f83a48fa6f6dc3ce8898853e10f557ae5aad1f) - add `isStruct` and `isStructConstructorLike` to namespace
-   [`27ace7d`](https://github.com/stdlib-js/stdlib/commit/27ace7d0555fdbd7af3b0ecb1787718c8c84c0f2) - add `ndfillBy` to namespace
-   [`54a7d5c`](https://github.com/stdlib-js/stdlib/commit/54a7d5cc20b27a462948c69eb330024caf115ed7) - add `ndfill` to namespace
-   [`19d5ec9`](https://github.com/stdlib-js/stdlib/commit/19d5ec9452cc6e106fea60c2900d021391beedff) - add logic for eager evaluation of additional expression types [(#5053)](https://github.com/stdlib-js/stdlib/pull/5053)
-   [`6a2426c`](https://github.com/stdlib-js/stdlib/commit/6a2426c0caeb5ecb86b70dcd6b90983d99fecdd0) - add logic for eager evaluation in REPL [(#4277)](https://github.com/stdlib-js/stdlib/pull/4277)
-   [`6f85e44`](https://github.com/stdlib-js/stdlib/commit/6f85e44e067eb8dd189d6a80b11a4538d29f1f80) - **repl:** add settings and prototype methods for keybindings [(#3331)](https://github.com/stdlib-js/stdlib/pull/3331)
-   [`7d8aba0`](https://github.com/stdlib-js/stdlib/commit/7d8aba04d7513814f09d725b81c0f953ad4c3b7f) - add ndarray APIs and float32 constants to namespace
-   [`6f2d513`](https://github.com/stdlib-js/stdlib/commit/6f2d513c914a3b92bb202cd0e9527b8b734da65d) - add `ndarray2json` to namespace
-   [`2c01b65`](https://github.com/stdlib-js/stdlib/commit/2c01b654e7fcfae9bde232c5fdda10d14f02e30e) - add `ndfilterMap` to namespace
-   [`9ecc3d3`](https://github.com/stdlib-js/stdlib/commit/9ecc3d30b87a0d38cc7608a35024a15c920a2f29) - add `ndreject` to namespace
-   [`b916456`](https://github.com/stdlib-js/stdlib/commit/b916456714e3c8a4ecaf6605adf4d36188e924f9) - add `ndmap` and `ndfilter` to namespace
-   [`917119f`](https://github.com/stdlib-js/stdlib/commit/917119ffdb42b1c15214e4accaa928b279bcd17b) - add support for custom keybindings and editor actions in the REPL [(#2739)](https://github.com/stdlib-js/stdlib/pull/2739)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`079b5ac`](https://github.com/stdlib-js/stdlib/commit/079b5accfe214e1131ce3406091506a31b0c574e) - add `MemberExpression` check [(#5046)](https://github.com/stdlib-js/stdlib/pull/5046)
-   [`da56225`](https://github.com/stdlib-js/stdlib/commit/da56225a2166c87339716018163780bbf8e8d21c) - catch unexpected errors from `acorn-loose` in REPL tokenizer [(#4956)](https://github.com/stdlib-js/stdlib/pull/4956)
-   [`2de9ed7`](https://github.com/stdlib-js/stdlib/commit/2de9ed76d79a2f10a26a5246077199cf70819a89) - guard against proxy traps raising exceptions in REPL tokenizer [(#4457)](https://github.com/stdlib-js/stdlib/pull/4457)

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

A total of 2 issues were closed in this release:

[#2647](https://github.com/stdlib-js/stdlib/issues/2647), [#5045](https://github.com/stdlib-js/stdlib/issues/5045)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`ad9b000`](https://github.com/stdlib-js/stdlib/commit/ad9b000fa1fbd2c2e5911e7603779785eb58b41b) - **docs:** update REPL namespace documentation [(#7725)](https://github.com/stdlib-js/stdlib/pull/7725) _(by stdlib-bot)_
-   [`ceb1263`](https://github.com/stdlib-js/stdlib/commit/ceb12637184a5fa6e6fed6af39512250938d084d) - **docs:** update REPL namespace documentation [(#7718)](https://github.com/stdlib-js/stdlib/pull/7718) _(by stdlib-bot)_
-   [`521615e`](https://github.com/stdlib-js/stdlib/commit/521615e038d5d062fdb256718c24013d6b85f9c3) - **docs:** update REPL namespace documentation [(#7702)](https://github.com/stdlib-js/stdlib/pull/7702) _(by stdlib-bot)_
-   [`727a636`](https://github.com/stdlib-js/stdlib/commit/727a6368073c7566b7570c07f8cbdb9e2e373ec6) - **docs:** update REPL namespace documentation [(#7685)](https://github.com/stdlib-js/stdlib/pull/7685) _(by stdlib-bot)_
-   [`518f815`](https://github.com/stdlib-js/stdlib/commit/518f8152adc591596d6e87f784c7e7ee462181bb) - **docs:** update REPL namespace documentation [(#7678)](https://github.com/stdlib-js/stdlib/pull/7678) _(by stdlib-bot)_
-   [`91644d7`](https://github.com/stdlib-js/stdlib/commit/91644d75ed97a53e422349d58c0d270e7f796347) - **docs:** update REPL namespace documentation [(#7663)](https://github.com/stdlib-js/stdlib/pull/7663) _(by stdlib-bot)_
-   [`4020080`](https://github.com/stdlib-js/stdlib/commit/402008089ecb5da1b1e617345b907d3721cd1ed9) - **docs:** update REPL namespace documentation [(#7648)](https://github.com/stdlib-js/stdlib/pull/7648) _(by stdlib-bot)_
-   [`8da4e68`](https://github.com/stdlib-js/stdlib/commit/8da4e685eb7d61f33f56f09ae3924d6878e38e90) - **docs:** update REPL namespace documentation [(#7637)](https://github.com/stdlib-js/stdlib/pull/7637) _(by stdlib-bot)_
-   [`c31a503`](https://github.com/stdlib-js/stdlib/commit/c31a50356da4287c17c7202bf4ba2b7a2c936081) - **docs:** update REPL namespace documentation [(#7618)](https://github.com/stdlib-js/stdlib/pull/7618) _(by stdlib-bot)_
-   [`1d3ce43`](https://github.com/stdlib-js/stdlib/commit/1d3ce43592693cd9e7c3d08c514bad02453d31be) - **docs:** update REPL namespace documentation [(#7602)](https://github.com/stdlib-js/stdlib/pull/7602) _(by stdlib-bot)_
-   [`6bce04d`](https://github.com/stdlib-js/stdlib/commit/6bce04da363a198f39f44e5275e3d13832bb5e2e) - **docs:** update REPL namespace documentation [(#7593)](https://github.com/stdlib-js/stdlib/pull/7593) _(by stdlib-bot)_
-   [`3a533a6`](https://github.com/stdlib-js/stdlib/commit/3a533a6c79a7d5f9869ce0c0f827aae9545d9ec2) - **docs:** update REPL namespace documentation [(#7585)](https://github.com/stdlib-js/stdlib/pull/7585) _(by stdlib-bot)_
-   [`1195c55`](https://github.com/stdlib-js/stdlib/commit/1195c5573951a7b04558e6b05ff3bbf0ac43ddd2) - **docs:** update REPL namespace documentation [(#7578)](https://github.com/stdlib-js/stdlib/pull/7578) _(by stdlib-bot)_
-   [`7c40402`](https://github.com/stdlib-js/stdlib/commit/7c40402412fdb0f7af52277f9f9931b71e2180df) - **docs:** update REPL namespace documentation [(#7571)](https://github.com/stdlib-js/stdlib/pull/7571) _(by stdlib-bot)_
-   [`9235ac4`](https://github.com/stdlib-js/stdlib/commit/9235ac4317d3a0b5b95ca6d8a8a0222b36a3a027) - **docs:** update REPL namespace documentation [(#7563)](https://github.com/stdlib-js/stdlib/pull/7563) _(by stdlib-bot)_
-   [`b43ad79`](https://github.com/stdlib-js/stdlib/commit/b43ad79867fd3246c053da7a1e6c6ca161c72264) - **docs:** update REPL namespace documentation [(#7555)](https://github.com/stdlib-js/stdlib/pull/7555) _(by stdlib-bot)_
-   [`3687841`](https://github.com/stdlib-js/stdlib/commit/368784150862d1c765db9742297b6fa6cfa3a8fa) - **docs:** update REPL namespace documentation [(#7551)](https://github.com/stdlib-js/stdlib/pull/7551) _(by stdlib-bot)_
-   [`89be55e`](https://github.com/stdlib-js/stdlib/commit/89be55e995f3375183d7fb616d073887c0f35d8d) - **docs:** update REPL namespace documentation [(#7546)](https://github.com/stdlib-js/stdlib/pull/7546) _(by stdlib-bot)_
-   [`f7e8910`](https://github.com/stdlib-js/stdlib/commit/f7e89105ceb7b0e26cb0dfb7a00e87bc951aca31) - **docs:** update REPL namespace documentation [(#7535)](https://github.com/stdlib-js/stdlib/pull/7535) _(by stdlib-bot)_
-   [`fbfec64`](https://github.com/stdlib-js/stdlib/commit/fbfec64b3c35c762d0b5b7a3d1bf6a47b2af967b) - **docs:** update REPL namespace documentation [(#7521)](https://github.com/stdlib-js/stdlib/pull/7521) _(by stdlib-bot)_
-   [`fa46668`](https://github.com/stdlib-js/stdlib/commit/fa46668f2a8b4d1d1c3be38595e917a3176a829c) - **docs:** update REPL namespace documentation [(#7513)](https://github.com/stdlib-js/stdlib/pull/7513) _(by stdlib-bot)_
-   [`68510c1`](https://github.com/stdlib-js/stdlib/commit/68510c112e51359cc37e812fab3386d7d4a41cd9) - **docs:** update REPL namespace documentation [(#7496)](https://github.com/stdlib-js/stdlib/pull/7496) _(by stdlib-bot)_
-   [`0698ee9`](https://github.com/stdlib-js/stdlib/commit/0698ee94d05c0f6e7481b7e519bd9117cc3f8ba1) - **docs:** update REPL namespace documentation [(#7490)](https://github.com/stdlib-js/stdlib/pull/7490) _(by stdlib-bot)_
-   [`11b42d7`](https://github.com/stdlib-js/stdlib/commit/11b42d7053cd31a2327afaef0d0ac7289346f1c1) - **docs:** update REPL namespace documentation [(#7471)](https://github.com/stdlib-js/stdlib/pull/7471) _(by stdlib-bot)_
-   [`d2f83a4`](https://github.com/stdlib-js/stdlib/commit/d2f83a48fa6f6dc3ce8898853e10f557ae5aad1f) - **feat:** add `isStruct` and `isStructConstructorLike` to namespace _(by Athan Reines)_
-   [`28f9979`](https://github.com/stdlib-js/stdlib/commit/28f99791e07b4d5bc48b1d6ca42662208211cd8b) - **docs:** update REPL namespace documentation [(#7457)](https://github.com/stdlib-js/stdlib/pull/7457) _(by stdlib-bot, Philipp Burckhardt)_
-   [`0902a5b`](https://github.com/stdlib-js/stdlib/commit/0902a5b8ec9f8209d253e5fff7c0a73ec082cee7) - **docs:** update REPL namespace documentation [(#7444)](https://github.com/stdlib-js/stdlib/pull/7444) _(by stdlib-bot)_
-   [`05e4da8`](https://github.com/stdlib-js/stdlib/commit/05e4da8247ce01c4b57c33b841094659f6823e36) - **docs:** update REPL namespace documentation [(#7432)](https://github.com/stdlib-js/stdlib/pull/7432) _(by stdlib-bot, Philipp Burckhardt)_
-   [`b8b6f36`](https://github.com/stdlib-js/stdlib/commit/b8b6f36d988505654d4e9fcd465375e77d5fe0fb) - **docs:** update REPL namespace documentation [(#7406)](https://github.com/stdlib-js/stdlib/pull/7406) _(by stdlib-bot, Philipp Burckhardt)_
-   [`901fbca`](https://github.com/stdlib-js/stdlib/commit/901fbca03d9e97bcdde31dac16bc395a97a99108) - **docs:** update REPL namespace documentation [(#7379)](https://github.com/stdlib-js/stdlib/pull/7379) _(by stdlib-bot)_
-   [`1a6ec86`](https://github.com/stdlib-js/stdlib/commit/1a6ec86b91682b715cc8b37de186e7179ff0f370) - **docs:** update REPL namespace documentation [(#7363)](https://github.com/stdlib-js/stdlib/pull/7363) _(by stdlib-bot, Philipp Burckhardt)_
-   [`5f5177b`](https://github.com/stdlib-js/stdlib/commit/5f5177bb8f8ae117b58bd0959f1c51b6939c4c78) - **docs:** update REPL namespace documentation [(#7353)](https://github.com/stdlib-js/stdlib/pull/7353) _(by stdlib-bot)_
-   [`5e6b517`](https://github.com/stdlib-js/stdlib/commit/5e6b5173a0fdd3d50d79125f66dafb7bc13a4bf7) - **docs:** update REPL namespace documentation [(#7339)](https://github.com/stdlib-js/stdlib/pull/7339) _(by stdlib-bot)_
-   [`00f8cc6`](https://github.com/stdlib-js/stdlib/commit/00f8cc65988a12dcaf37604a885934e8fc73a94e) - **docs:** update REPL namespace documentation [(#7329)](https://github.com/stdlib-js/stdlib/pull/7329) _(by stdlib-bot)_
-   [`88e6d2f`](https://github.com/stdlib-js/stdlib/commit/88e6d2fb7a4c0e2b4bc767588467080459dcc730) - **docs:** update REPL namespace documentation [(#7314)](https://github.com/stdlib-js/stdlib/pull/7314) _(by stdlib-bot)_
-   [`b69384d`](https://github.com/stdlib-js/stdlib/commit/b69384dc1f16ba21886a1d6dd9850ec1021394f4) - **docs:** update REPL namespace documentation [(#7299)](https://github.com/stdlib-js/stdlib/pull/7299) _(by stdlib-bot)_
-   [`8853274`](https://github.com/stdlib-js/stdlib/commit/885327441daddf70c02a0ca51925c960993fc4ce) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`de53118`](https://github.com/stdlib-js/stdlib/commit/de531184154b9c71722564b6acfb2f9b42673917) - **docs:** update REPL namespace documentation [(#7282)](https://github.com/stdlib-js/stdlib/pull/7282) _(by stdlib-bot)_
-   [`363af3d`](https://github.com/stdlib-js/stdlib/commit/363af3da4a77e2392ba73e982be5adb9ccd80c5c) - **docs:** update REPL namespace documentation [(#7260)](https://github.com/stdlib-js/stdlib/pull/7260) _(by stdlib-bot)_
-   [`1c87942`](https://github.com/stdlib-js/stdlib/commit/1c87942c8d2a2597a8f710c1d139ff2120576cc7) - **docs:** update REPL namespace documentation [(#7242)](https://github.com/stdlib-js/stdlib/pull/7242) _(by stdlib-bot)_
-   [`7d29148`](https://github.com/stdlib-js/stdlib/commit/7d29148daa701a3113e72a901fd5096d2a5da4d1) - **docs:** update REPL namespace documentation [(#7232)](https://github.com/stdlib-js/stdlib/pull/7232) _(by stdlib-bot)_
-   [`6665951`](https://github.com/stdlib-js/stdlib/commit/66659512747686f55bd8e8c0420f8a1d8131a221) - **docs:** update REPL namespace documentation [(#7221)](https://github.com/stdlib-js/stdlib/pull/7221) _(by stdlib-bot)_
-   [`ceac1d7`](https://github.com/stdlib-js/stdlib/commit/ceac1d736df30151eeca58b76a0d31e92dc0486e) - **docs:** update REPL namespace documentation [(#7161)](https://github.com/stdlib-js/stdlib/pull/7161) _(by stdlib-bot)_
-   [`586b528`](https://github.com/stdlib-js/stdlib/commit/586b5281dac7ad93a3fce2c87d45386c77e71f45) - **docs:** update REPL namespace documentation [(#7151)](https://github.com/stdlib-js/stdlib/pull/7151) _(by stdlib-bot)_
-   [`6a7c0de`](https://github.com/stdlib-js/stdlib/commit/6a7c0dec1828faea89c9af40fb43094c99bdb317) - **docs:** update REPL namespace documentation [(#7091)](https://github.com/stdlib-js/stdlib/pull/7091) _(by stdlib-bot)_
-   [`2f8ef39`](https://github.com/stdlib-js/stdlib/commit/2f8ef390ab6e8573cfa2c25b96c147f7aca01fdd) - **docs:** update REPL namespace documentation [(#7054)](https://github.com/stdlib-js/stdlib/pull/7054) _(by stdlib-bot)_
-   [`a317baf`](https://github.com/stdlib-js/stdlib/commit/a317baf0af91e23d7004c9327f6158b165513472) - **docs:** update REPL namespace documentation [(#7045)](https://github.com/stdlib-js/stdlib/pull/7045) _(by stdlib-bot)_
-   [`7c9de34`](https://github.com/stdlib-js/stdlib/commit/7c9de3413dc4e03b57dd1073e29ef5104d276c85) - **docs:** update REPL namespace documentation [(#7006)](https://github.com/stdlib-js/stdlib/pull/7006) _(by stdlib-bot)_
-   [`c0db872`](https://github.com/stdlib-js/stdlib/commit/c0db8723de95ebc1dc594eac720c4f468c812481) - **docs:** update REPL namespace documentation [(#6986)](https://github.com/stdlib-js/stdlib/pull/6986) _(by stdlib-bot)_
-   [`57c02a7`](https://github.com/stdlib-js/stdlib/commit/57c02a74ae32cfbad6f251c47100d0a832972c0d) - **docs:** update REPL namespace documentation [(#6967)](https://github.com/stdlib-js/stdlib/pull/6967) _(by stdlib-bot)_
-   [`62f33b0`](https://github.com/stdlib-js/stdlib/commit/62f33b0b8794545ebe72c03128a23316deab4571) - **docs:** update REPL namespace documentation [(#6960)](https://github.com/stdlib-js/stdlib/pull/6960) _(by stdlib-bot)_
-   [`aa768fa`](https://github.com/stdlib-js/stdlib/commit/aa768fa2c74e14e2d916e5ccae98f2091ad54f85) - **docs:** update REPL namespace documentation [(#6947)](https://github.com/stdlib-js/stdlib/pull/6947) _(by stdlib-bot)_
-   [`8167c18`](https://github.com/stdlib-js/stdlib/commit/8167c188a595fa20a109a7d5078e4b78289b2c70) - **docs:** update REPL namespace documentation [(#6927)](https://github.com/stdlib-js/stdlib/pull/6927) _(by stdlib-bot)_
-   [`ed1b563`](https://github.com/stdlib-js/stdlib/commit/ed1b5639563e3bcbe02fc19b40ab6f0cb7793af8) - **docs:** update REPL namespace documentation [(#6888)](https://github.com/stdlib-js/stdlib/pull/6888) _(by stdlib-bot)_
-   [`e696a0e`](https://github.com/stdlib-js/stdlib/commit/e696a0e210b00f2bc6d08cd5080852f5f7c9306b) - **docs:** update REPL namespace documentation [(#6875)](https://github.com/stdlib-js/stdlib/pull/6875) _(by stdlib-bot)_
-   [`178ac6e`](https://github.com/stdlib-js/stdlib/commit/178ac6ee87b2e5ebf8a3c51763fc444ba433bec8) - **docs:** update REPL namespace documentation [(#6818)](https://github.com/stdlib-js/stdlib/pull/6818) _(by stdlib-bot, Philipp Burckhardt)_
-   [`e3cfb73`](https://github.com/stdlib-js/stdlib/commit/e3cfb73b8b77d4c5a34babcd56dece21cc5210ea) - **docs:** update REPL namespace documentation [(#6802)](https://github.com/stdlib-js/stdlib/pull/6802) _(by stdlib-bot)_
-   [`2ae417a`](https://github.com/stdlib-js/stdlib/commit/2ae417ab03cbc2b6fb426a749cbe12843bcac257) - **docs:** update REPL namespace documentation [(#6789)](https://github.com/stdlib-js/stdlib/pull/6789) _(by stdlib-bot)_
-   [`4d1ed1a`](https://github.com/stdlib-js/stdlib/commit/4d1ed1af10fbb497aaa1aab4806d253169958583) - **docs:** update REPL namespace documentation [(#6780)](https://github.com/stdlib-js/stdlib/pull/6780) _(by stdlib-bot)_
-   [`e42a4c6`](https://github.com/stdlib-js/stdlib/commit/e42a4c6a7fc874822b47d14a1394419a4067da58) - **docs:** update REPL namespace documentation [(#6740)](https://github.com/stdlib-js/stdlib/pull/6740) _(by stdlib-bot)_
-   [`522db21`](https://github.com/stdlib-js/stdlib/commit/522db2178742eb14899d7fdcb03b78dd44c544d7) - **docs:** update REPL namespace documentation [(#6718)](https://github.com/stdlib-js/stdlib/pull/6718) _(by stdlib-bot)_
-   [`a920f33`](https://github.com/stdlib-js/stdlib/commit/a920f3373169f60876fe6b65d46ea3d6fdb27e07) - **docs:** update REPL namespace documentation [(#6696)](https://github.com/stdlib-js/stdlib/pull/6696) _(by stdlib-bot)_
-   [`ea1fcc5`](https://github.com/stdlib-js/stdlib/commit/ea1fcc5826b838b18b54c4832a42dfc4ef8b5f7d) - **docs:** update REPL namespace documentation [(#6656)](https://github.com/stdlib-js/stdlib/pull/6656) _(by stdlib-bot)_
-   [`87cf628`](https://github.com/stdlib-js/stdlib/commit/87cf62836d86234f2641a112e55568fa30c11cb3) - **docs:** update REPL namespace documentation [(#6647)](https://github.com/stdlib-js/stdlib/pull/6647) _(by stdlib-bot)_
-   [`a61c6bd`](https://github.com/stdlib-js/stdlib/commit/a61c6bdc45161c87412de735e9eaf49faae95db8) - **docs:** update REPL namespace documentation [(#6591)](https://github.com/stdlib-js/stdlib/pull/6591) _(by stdlib-bot)_
-   [`6c7175d`](https://github.com/stdlib-js/stdlib/commit/6c7175dff13d32ba8169c91817173a6abc174493) - **docs:** update REPL namespace documentation [(#6579)](https://github.com/stdlib-js/stdlib/pull/6579) _(by stdlib-bot)_
-   [`89c86cc`](https://github.com/stdlib-js/stdlib/commit/89c86cc8432db00139a26dcda13eac0bdf64e0b4) - **docs:** update REPL namespace documentation [(#6555)](https://github.com/stdlib-js/stdlib/pull/6555) _(by stdlib-bot)_
-   [`7f0f10c`](https://github.com/stdlib-js/stdlib/commit/7f0f10ccc881475722f2ed4611e2d19138bd007f) - **docs:** update REPL namespace documentation [(#6540)](https://github.com/stdlib-js/stdlib/pull/6540) _(by stdlib-bot)_
-   [`0319d5a`](https://github.com/stdlib-js/stdlib/commit/0319d5a70fcdc0dfcc0870a27fc85d2a7cb6616a) - **docs:** update REPL namespace documentation [(#6525)](https://github.com/stdlib-js/stdlib/pull/6525) _(by stdlib-bot)_
-   [`3c02758`](https://github.com/stdlib-js/stdlib/commit/3c0275829751a0bc40a3573fa5175e6a100d6277) - **docs:** update REPL namespace documentation [(#6505)](https://github.com/stdlib-js/stdlib/pull/6505) _(by stdlib-bot)_
-   [`a46814a`](https://github.com/stdlib-js/stdlib/commit/a46814aa1c4f8bfd0d0c610dd60392fbe127d9b3) - **docs:** update REPL namespace documentation [(#6479)](https://github.com/stdlib-js/stdlib/pull/6479) _(by stdlib-bot)_
-   [`20e7abf`](https://github.com/stdlib-js/stdlib/commit/20e7abfa44415e1d1110e941f31746933a3d1df1) - **docs:** update REPL namespace documentation [(#6460)](https://github.com/stdlib-js/stdlib/pull/6460) _(by stdlib-bot)_
-   [`eac37fb`](https://github.com/stdlib-js/stdlib/commit/eac37fba6f024c71566c6eb9fb37210318d929a3) - **docs:** update REPL namespace documentation [(#6449)](https://github.com/stdlib-js/stdlib/pull/6449) _(by stdlib-bot)_
-   [`3219411`](https://github.com/stdlib-js/stdlib/commit/3219411d50ae39627978718fd90b7313081d7666) - **docs:** update REPL namespace documentation [(#6437)](https://github.com/stdlib-js/stdlib/pull/6437) _(by stdlib-bot)_
-   [`a170d1d`](https://github.com/stdlib-js/stdlib/commit/a170d1d76f746f6591bf4d31fb38b21c3e1c3fd2) - **docs:** update REPL namespace documentation [(#6420)](https://github.com/stdlib-js/stdlib/pull/6420) _(by stdlib-bot)_
-   [`0e620f2`](https://github.com/stdlib-js/stdlib/commit/0e620f286860e21fbaabf59056b12cb1c2154948) - **docs:** update REPL namespace documentation [(#6407)](https://github.com/stdlib-js/stdlib/pull/6407) _(by stdlib-bot)_
-   [`26df9b1`](https://github.com/stdlib-js/stdlib/commit/26df9b11112500578d57913e239006f758677d87) - **docs:** update REPL namespace documentation [(#6358)](https://github.com/stdlib-js/stdlib/pull/6358) _(by stdlib-bot)_
-   [`1aa6f0f`](https://github.com/stdlib-js/stdlib/commit/1aa6f0f0ca8b33af12fea9d5546ee7f88aea4045) - **docs:** update REPL namespace documentation [(#6338)](https://github.com/stdlib-js/stdlib/pull/6338) _(by stdlib-bot)_
-   [`27ace7d`](https://github.com/stdlib-js/stdlib/commit/27ace7d0555fdbd7af3b0ecb1787718c8c84c0f2) - **feat:** add `ndfillBy` to namespace _(by Athan Reines)_
-   [`3d9933c`](https://github.com/stdlib-js/stdlib/commit/3d9933c64e0b7bb95251b3425b046cf0af8036b2) - **docs:** update REPL namespace documentation [(#6316)](https://github.com/stdlib-js/stdlib/pull/6316) _(by stdlib-bot)_
-   [`54a7d5c`](https://github.com/stdlib-js/stdlib/commit/54a7d5cc20b27a462948c69eb330024caf115ed7) - **feat:** add `ndfill` to namespace _(by Athan Reines)_
-   [`60310a4`](https://github.com/stdlib-js/stdlib/commit/60310a466ebe2a37ab66135c59cc880ca3183ade) - **docs:** fix related package _(by Athan Reines)_
-   [`00916fc`](https://github.com/stdlib-js/stdlib/commit/00916fc1f851438250f7510b2c2aace9ff4e0465) - **docs:** update REPL namespace documentation [(#6174)](https://github.com/stdlib-js/stdlib/pull/6174) _(by stdlib-bot)_
-   [`6aea280`](https://github.com/stdlib-js/stdlib/commit/6aea2800b62d9f97232446808d25e9f10c6ce880) - **docs:** update REPL namespace documentation [(#6138)](https://github.com/stdlib-js/stdlib/pull/6138) _(by stdlib-bot)_
-   [`0541591`](https://github.com/stdlib-js/stdlib/commit/05415910493815ffb89a74df1ea55b83df3edf64) - **docs:** update REPL namespace documentation [(#6107)](https://github.com/stdlib-js/stdlib/pull/6107) _(by stdlib-bot)_
-   [`9f41c88`](https://github.com/stdlib-js/stdlib/commit/9f41c88a10ad21da9492845e0389b2512e01f178) - **docs:** update REPL namespace documentation [(#6088)](https://github.com/stdlib-js/stdlib/pull/6088) _(by stdlib-bot)_
-   [`b82d76a`](https://github.com/stdlib-js/stdlib/commit/b82d76a7c53b7386d2a9db84e217900c16fdfee7) - **docs:** update REPL namespace documentation [(#6059)](https://github.com/stdlib-js/stdlib/pull/6059) _(by stdlib-bot)_
-   [`e4f76e7`](https://github.com/stdlib-js/stdlib/commit/e4f76e75ff13f723a5e8d483e315e13e76854cff) - **docs:** update REPL namespace documentation [(#6009)](https://github.com/stdlib-js/stdlib/pull/6009) _(by stdlib-bot, Philipp Burckhardt)_
-   [`c61f891`](https://github.com/stdlib-js/stdlib/commit/c61f8914d54a43ca41efc1e2362f2f42ea4a3fa7) - **docs:** update REPL namespace documentation [(#5985)](https://github.com/stdlib-js/stdlib/pull/5985) _(by stdlib-bot)_
-   [`f311d86`](https://github.com/stdlib-js/stdlib/commit/f311d863a3f5b4f1d441ae689464f29e3451ae33) - **docs:** update REPL namespace documentation [(#5964)](https://github.com/stdlib-js/stdlib/pull/5964) _(by stdlib-bot)_
-   [`c042314`](https://github.com/stdlib-js/stdlib/commit/c042314c8aac52a9db0d34548a86522d99448e9a) - **docs:** update REPL help _(by Athan Reines)_
-   [`00f7954`](https://github.com/stdlib-js/stdlib/commit/00f7954d5738a0726b6265f6e5f55b73edccc192) - **docs:** update REPL namespace documentation [(#5939)](https://github.com/stdlib-js/stdlib/pull/5939) _(by stdlib-bot)_
-   [`3c63b7b`](https://github.com/stdlib-js/stdlib/commit/3c63b7b586ac3a08b713b3882b8d52ebcf411b08) - **docs:** update REPL namespace documentation [(#5906)](https://github.com/stdlib-js/stdlib/pull/5906) _(by stdlib-bot)_
-   [`a63fd20`](https://github.com/stdlib-js/stdlib/commit/a63fd20246bf236df0becdac7c4301587dc98858) - **docs:** update REPL help _(by Athan Reines)_
-   [`7ecf730`](https://github.com/stdlib-js/stdlib/commit/7ecf730fb8c52aa717f5c15ad099321a72c4b1db) - **docs:** update REPL namespace documentation [(#5841)](https://github.com/stdlib-js/stdlib/pull/5841) _(by stdlib-bot)_
-   [`050e88a`](https://github.com/stdlib-js/stdlib/commit/050e88a13d764ad95483a038f2b36761fea8acda) - **docs:** update REPL namespace documentation [(#5817)](https://github.com/stdlib-js/stdlib/pull/5817) _(by stdlib-bot)_
-   [`a993ae6`](https://github.com/stdlib-js/stdlib/commit/a993ae68fc2b064f1bcadbb69abd484b8d3462d1) - **docs:** update REPL namespace documentation [(#5773)](https://github.com/stdlib-js/stdlib/pull/5773) _(by stdlib-bot)_
-   [`19fdc4c`](https://github.com/stdlib-js/stdlib/commit/19fdc4cff82a8f0129a1fa6f2d8ac8880db8d1ed) - **docs:** update REPL namespace documentation [(#5750)](https://github.com/stdlib-js/stdlib/pull/5750) _(by stdlib-bot)_
-   [`3676447`](https://github.com/stdlib-js/stdlib/commit/3676447f559061dc59e14113fbd164413f77f48b) - **docs:** update REPL namespace documentation [(#5723)](https://github.com/stdlib-js/stdlib/pull/5723) _(by stdlib-bot)_
-   [`8c8494b`](https://github.com/stdlib-js/stdlib/commit/8c8494b376187895500e08aab1643b037b5ac9fd) - **docs:** update REPL namespace documentation [(#5532)](https://github.com/stdlib-js/stdlib/pull/5532) _(by stdlib-bot)_
-   [`fd6d830`](https://github.com/stdlib-js/stdlib/commit/fd6d8300eddef5b383a5f6e0973ce8e1893f549b) - **docs:** update REPL namespace documentation [(#5512)](https://github.com/stdlib-js/stdlib/pull/5512) _(by stdlib-bot)_
-   [`58973b7`](https://github.com/stdlib-js/stdlib/commit/58973b73eae4c50f073804658041bf3d5a4a97a4) - **docs:** update REPL namespace documentation [(#5437)](https://github.com/stdlib-js/stdlib/pull/5437) _(by stdlib-bot)_
-   [`6b175bb`](https://github.com/stdlib-js/stdlib/commit/6b175bb24511e22562ec90f20e8388eec791093c) - **docs:** update REPL namespace documentation [(#5402)](https://github.com/stdlib-js/stdlib/pull/5402) _(by stdlib-bot)_
-   [`29a7783`](https://github.com/stdlib-js/stdlib/commit/29a77831faaa86ca3512d0a1248e06a5f3653e7c) - **docs:** update REPL namespace documentation [(#5386)](https://github.com/stdlib-js/stdlib/pull/5386) _(by stdlib-bot)_
-   [`0625d8e`](https://github.com/stdlib-js/stdlib/commit/0625d8e45c3f5ad868b15c0999e4c1da32326dd7) - **docs:** update REPL namespace documentation [(#5365)](https://github.com/stdlib-js/stdlib/pull/5365) _(by stdlib-bot, Philipp Burckhardt)_
-   [`5875a2c`](https://github.com/stdlib-js/stdlib/commit/5875a2c8878cf2b966d61e886efd99b91e6793f3) - **docs:** update repl help _(by Athan Reines)_
-   [`79dbcc6`](https://github.com/stdlib-js/stdlib/commit/79dbcc60d4d9fa8b51460b64c1961e4b985830ff) - **refactor:** update path _(by Athan Reines)_
-   [`5c1514b`](https://github.com/stdlib-js/stdlib/commit/5c1514b6b9dcdad79252d2c3ed26fec7884172dd) - **refactor:** update path _(by Athan Reines)_
-   [`0dce656`](https://github.com/stdlib-js/stdlib/commit/0dce656b394bedfa2da7be1afd041f6b4e0aaab8) - **refactor:** update path _(by Athan Reines)_
-   [`d67d2d9`](https://github.com/stdlib-js/stdlib/commit/d67d2d9b20812b307da729b50475a297c00fa57c) - **docs:** update REPL namespace documentation [(#5350)](https://github.com/stdlib-js/stdlib/pull/5350) _(by stdlib-bot)_
-   [`5831b72`](https://github.com/stdlib-js/stdlib/commit/5831b728172f2f0d09cbb08b1138823692ad54e6) - **docs:** update REPL namespace documentation [(#5331)](https://github.com/stdlib-js/stdlib/pull/5331) _(by stdlib-bot)_
-   [`380a2b8`](https://github.com/stdlib-js/stdlib/commit/380a2b855177749b308a72136e28c8df6b7f71bb) - **docs:** update REPL namespace documentation [(#5309)](https://github.com/stdlib-js/stdlib/pull/5309) _(by stdlib-bot)_
-   [`a4c70ed`](https://github.com/stdlib-js/stdlib/commit/a4c70edd6f37ddc0113217de8b3c426827129e77) - **docs:** update REPL namespace documentation [(#5278)](https://github.com/stdlib-js/stdlib/pull/5278) _(by stdlib-bot)_
-   [`903dd5a`](https://github.com/stdlib-js/stdlib/commit/903dd5ad042c88062b0e86aada5b4611d1fe8ea4) - **docs:** update REPL namespace documentation [(#5255)](https://github.com/stdlib-js/stdlib/pull/5255) _(by stdlib-bot)_
-   [`579b628`](https://github.com/stdlib-js/stdlib/commit/579b6281b7cf79d745d70b779f5f250ea53aff21) - **docs:** update REPL namespace documentation [(#5244)](https://github.com/stdlib-js/stdlib/pull/5244) _(by stdlib-bot)_
-   [`842339c`](https://github.com/stdlib-js/stdlib/commit/842339cc7f1235f0276e987d18b78bf04a12c2ed) - **docs:** update REPL namespace documentation [(#5208)](https://github.com/stdlib-js/stdlib/pull/5208) _(by stdlib-bot)_
-   [`e13c476`](https://github.com/stdlib-js/stdlib/commit/e13c476e209a63c049f68eb1a4585280d0f74fff) - **docs:** update REPL namespace documentation _(by stdlib-bot)_
-   [`6de2470`](https://github.com/stdlib-js/stdlib/commit/6de24703c71c1c5fb4a591b9555186066d50f273) - **docs:** update REPL namespace documentation [(#5153)](https://github.com/stdlib-js/stdlib/pull/5153) _(by stdlib-bot)_
-   [`502c87c`](https://github.com/stdlib-js/stdlib/commit/502c87cea01e40e40b7cb5bba335a943e148e613) - **docs:** update REPL namespace documentation [(#5131)](https://github.com/stdlib-js/stdlib/pull/5131) _(by stdlib-bot)_
-   [`51c17ee`](https://github.com/stdlib-js/stdlib/commit/51c17eeee374825b340a660b98056e24eab987f5) - **docs:** update REPL namespace documentation [(#5076)](https://github.com/stdlib-js/stdlib/pull/5076) _(by stdlib-bot)_
-   [`f52e3b9`](https://github.com/stdlib-js/stdlib/commit/f52e3b993e5a8f9763207968f0ac7c2dc80f2554) - **docs:** update REPL namespace documentation [(#5061)](https://github.com/stdlib-js/stdlib/pull/5061) _(by stdlib-bot)_
-   [`19d5ec9`](https://github.com/stdlib-js/stdlib/commit/19d5ec9452cc6e106fea60c2900d021391beedff) - **feat:** add logic for eager evaluation of additional expression types [(#5053)](https://github.com/stdlib-js/stdlib/pull/5053) _(by Vinit Pandit)_
-   [`6c52481`](https://github.com/stdlib-js/stdlib/commit/6c524811da8db39bd376d6243a24ed3fbf3a2c5f) - **docs:** update REPL namespace documentation [(#5050)](https://github.com/stdlib-js/stdlib/pull/5050) _(by stdlib-bot)_
-   [`079b5ac`](https://github.com/stdlib-js/stdlib/commit/079b5accfe214e1131ce3406091506a31b0c574e) - **fix:** add `MemberExpression` check [(#5046)](https://github.com/stdlib-js/stdlib/pull/5046) _(by Vinit Pandit)_
-   [`9bed043`](https://github.com/stdlib-js/stdlib/commit/9bed043556e84cf5f039ce90b9d9d242dedb645d) - **docs:** update REPL namespace documentation [(#5040)](https://github.com/stdlib-js/stdlib/pull/5040) _(by stdlib-bot)_
-   [`6a2426c`](https://github.com/stdlib-js/stdlib/commit/6a2426c0caeb5ecb86b70dcd6b90983d99fecdd0) - **feat:** add logic for eager evaluation in REPL [(#4277)](https://github.com/stdlib-js/stdlib/pull/4277) _(by Vinit Pandit, Athan Reines, Snehil Shah)_
-   [`da56225`](https://github.com/stdlib-js/stdlib/commit/da56225a2166c87339716018163780bbf8e8d21c) - **fix:** catch unexpected errors from `acorn-loose` in REPL tokenizer [(#4956)](https://github.com/stdlib-js/stdlib/pull/4956) _(by Snehil Shah)_
-   [`cc63ccf`](https://github.com/stdlib-js/stdlib/commit/cc63ccf92c1051f6b7ac6d4684e089b9766181f3) - **docs:** update REPL namespace documentation [(#4971)](https://github.com/stdlib-js/stdlib/pull/4971) _(by stdlib-bot)_
-   [`7aff79a`](https://github.com/stdlib-js/stdlib/commit/7aff79a20c90ad7042a8d182614f2566bde5b693) - **docs:** update REPL namespace documentation [(#4878)](https://github.com/stdlib-js/stdlib/pull/4878) _(by stdlib-bot)_
-   [`72e5575`](https://github.com/stdlib-js/stdlib/commit/72e557573ae2d293313cd834eb8da8dd0e99ffb3) - **docs:** update REPL namespace documentation [(#4857)](https://github.com/stdlib-js/stdlib/pull/4857) _(by stdlib-bot)_
-   [`8883b2a`](https://github.com/stdlib-js/stdlib/commit/8883b2a54364d6517f0bad59379d16615f7a07d5) - **docs:** update REPL namespace documentation [(#4844)](https://github.com/stdlib-js/stdlib/pull/4844) _(by stdlib-bot)_
-   [`58801b6`](https://github.com/stdlib-js/stdlib/commit/58801b63284a62a1c4411ddb482d78dac9204740) - **docs:** update REPL namespace documentation [(#4829)](https://github.com/stdlib-js/stdlib/pull/4829) _(by stdlib-bot)_
-   [`ea9828a`](https://github.com/stdlib-js/stdlib/commit/ea9828a5cc6ab326bb4e4fb4c88a621cb8e7d362) - **docs:** update REPL namespace documentation [(#4818)](https://github.com/stdlib-js/stdlib/pull/4818) _(by stdlib-bot)_
-   [`2bbed30`](https://github.com/stdlib-js/stdlib/commit/2bbed3060f43e3d98cecff5c5b068a48f7f56d3d) - **docs:** update REPL namespace documentation [(#4810)](https://github.com/stdlib-js/stdlib/pull/4810) _(by stdlib-bot, Philipp Burckhardt)_
-   [`05f1fc1`](https://github.com/stdlib-js/stdlib/commit/05f1fc16a5fab47bf6584f3be948e2eba20d61ad) - **docs:** update REPL namespace documentation [(#4795)](https://github.com/stdlib-js/stdlib/pull/4795) _(by stdlib-bot)_
-   [`6f85e44`](https://github.com/stdlib-js/stdlib/commit/6f85e44e067eb8dd189d6a80b11a4538d29f1f80) - **feat(repl):** add settings and prototype methods for keybindings [(#3331)](https://github.com/stdlib-js/stdlib/pull/3331) _(by Snehil Shah, Athan Reines)_
-   [`cd9bb62`](https://github.com/stdlib-js/stdlib/commit/cd9bb624de41013a92fa3d2c8c64e7672d4f73a2) - **docs:** update REPL namespace documentation [(#4759)](https://github.com/stdlib-js/stdlib/pull/4759) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7f87119`](https://github.com/stdlib-js/stdlib/commit/7f8711919a1a9c6d8ff2f6ee2565c00f695cd6e3) - **docs:** update REPL namespace documentation [(#4741)](https://github.com/stdlib-js/stdlib/pull/4741) _(by stdlib-bot)_
-   [`bf19438`](https://github.com/stdlib-js/stdlib/commit/bf19438f835667994827111c4df472b4b091bb0a) - **docs:** update REPL namespace documentation [(#4707)](https://github.com/stdlib-js/stdlib/pull/4707) _(by stdlib-bot, Philipp Burckhardt)_
-   [`4dded55`](https://github.com/stdlib-js/stdlib/commit/4dded554f9f8fe74fe30631f1f8ac2a3777cd479) - **docs:** update REPL namespace documentation [(#4692)](https://github.com/stdlib-js/stdlib/pull/4692) _(by stdlib-bot, Philipp Burckhardt)_
-   [`9299501`](https://github.com/stdlib-js/stdlib/commit/92995017120f6f2cd76a24fdf661e5875e1bad3d) - **docs:** update REPL namespace documentation [(#4676)](https://github.com/stdlib-js/stdlib/pull/4676) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a0cfe1f`](https://github.com/stdlib-js/stdlib/commit/a0cfe1f594a377dd06fd6f815933c790469fc08e) - **docs:** update REPL namespace documentation [(#4657)](https://github.com/stdlib-js/stdlib/pull/4657) _(by stdlib-bot)_
-   [`90985e9`](https://github.com/stdlib-js/stdlib/commit/90985e94abe1ce46f70d0c36c1b843d587088516) - **docs:** update REPL namespace documentation [(#4624)](https://github.com/stdlib-js/stdlib/pull/4624) _(by stdlib-bot)_
-   [`c4d642d`](https://github.com/stdlib-js/stdlib/commit/c4d642dce7027ddb907e7ab20013acbe816a448a) - **docs:** update REPL namespace documentation [(#4546)](https://github.com/stdlib-js/stdlib/pull/4546) _(by stdlib-bot)_
-   [`e347491`](https://github.com/stdlib-js/stdlib/commit/e3474917c7fb1dc4d96ce5a22edd39201647deda) - **docs:** update REPL namespace documentation [(#4519)](https://github.com/stdlib-js/stdlib/pull/4519) _(by stdlib-bot)_
-   [`02231a7`](https://github.com/stdlib-js/stdlib/commit/02231a75a23db0b74782be906dff51688df7e760) - **docs:** update REPL namespace documentation [(#4488)](https://github.com/stdlib-js/stdlib/pull/4488) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2de9ed7`](https://github.com/stdlib-js/stdlib/commit/2de9ed76d79a2f10a26a5246077199cf70819a89) - **fix:** guard against proxy traps raising exceptions in REPL tokenizer [(#4457)](https://github.com/stdlib-js/stdlib/pull/4457) _(by Snehil Shah)_
-   [`8dfa851`](https://github.com/stdlib-js/stdlib/commit/8dfa8515051fc7dde731cd8373b17377c7f015b8) - **docs:** update REPL namespace documentation [(#4447)](https://github.com/stdlib-js/stdlib/pull/4447) _(by stdlib-bot)_
-   [`b718cde`](https://github.com/stdlib-js/stdlib/commit/b718cde9cbff4b49da9caa3282dc72969243903b) - **docs:** update REPL namespace documentation [(#4427)](https://github.com/stdlib-js/stdlib/pull/4427) _(by stdlib-bot, Philipp Burckhardt)_
-   [`8d7f8e2`](https://github.com/stdlib-js/stdlib/commit/8d7f8e26975ffa5ca2ff11a24eac5f3bba589104) - **refactor:** add specialized handling for displaying ndarrays _(by Athan Reines)_
-   [`109c303`](https://github.com/stdlib-js/stdlib/commit/109c3034461f70d36339206cf05237230aba0902) - **docs:** update REPL namespace documentation [(#4364)](https://github.com/stdlib-js/stdlib/pull/4364) _(by stdlib-bot)_
-   [`7d8aba0`](https://github.com/stdlib-js/stdlib/commit/7d8aba04d7513814f09d725b81c0f953ad4c3b7f) - **feat:** add ndarray APIs and float32 constants to namespace _(by Athan Reines)_
-   [`800e80b`](https://github.com/stdlib-js/stdlib/commit/800e80b8550012d379d57c8ac7e14909a96cbc60) - **docs:** update REPL namespace documentation [(#4336)](https://github.com/stdlib-js/stdlib/pull/4336) _(by stdlib-bot, Philipp Burckhardt)_
-   [`723d79a`](https://github.com/stdlib-js/stdlib/commit/723d79a57ba54b0d000e04bff76fa425f8e9fff6) - **docs:** update REPL namespace documentation [(#4304)](https://github.com/stdlib-js/stdlib/pull/4304) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ff3b298`](https://github.com/stdlib-js/stdlib/commit/ff3b29838a24c64004d792c8b2f8305f6d4f7b6c) - **docs:** fix copy-paste error in source comment [(#4280)](https://github.com/stdlib-js/stdlib/pull/4280) _(by Vinit Pandit)_
-   [`bcd06cf`](https://github.com/stdlib-js/stdlib/commit/bcd06cfb0b7e8f4b0e623ebd462b77a3510e2795) - **docs:** update REPL namespace documentation [(#4267)](https://github.com/stdlib-js/stdlib/pull/4267) _(by stdlib-bot, Philipp Burckhardt)_
-   [`87f80c5`](https://github.com/stdlib-js/stdlib/commit/87f80c54979f503d87b8a630a57a32ec461dda89) - **docs:** update REPL namespace documentation [(#4244)](https://github.com/stdlib-js/stdlib/pull/4244) _(by stdlib-bot)_
-   [`4a70790`](https://github.com/stdlib-js/stdlib/commit/4a707903dfef7c2b56216000165706497d19a251) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`4b70046`](https://github.com/stdlib-js/stdlib/commit/4b70046a90794cfab03c25c4a796edfd0c7a89a6) - **docs:** update REPL docs _(by Athan Reines)_
-   [`fa0ac0e`](https://github.com/stdlib-js/stdlib/commit/fa0ac0ec61a0137144d4fbfb886db49a0fa98f60) - **docs:** update REPL namespace documentation [(#4115)](https://github.com/stdlib-js/stdlib/pull/4115) _(by stdlib-bot, Philipp Burckhardt)_
-   [`fd27b52`](https://github.com/stdlib-js/stdlib/commit/fd27b52333b9b482711d5b2b5ccd5bcb7a521b55) - **docs:** update REPL namespace documentation [(#4010)](https://github.com/stdlib-js/stdlib/pull/4010) _(by stdlib-bot, Philipp Burckhardt)_
-   [`54fb9de`](https://github.com/stdlib-js/stdlib/commit/54fb9de7dc776a7d01ca86de154d0f74694d1630) - **docs:** update REPL namespace documentation [(#3978)](https://github.com/stdlib-js/stdlib/pull/3978) _(by stdlib-bot, Philipp Burckhardt)_
-   [`6f2d513`](https://github.com/stdlib-js/stdlib/commit/6f2d513c914a3b92bb202cd0e9527b8b734da65d) - **feat:** add `ndarray2json` to namespace _(by Athan Reines)_
-   [`31cd034`](https://github.com/stdlib-js/stdlib/commit/31cd0347ff2c9b5b8e5b536b5a72e5befc3d308d) - **docs:** update REPL namespace documentation [(#3938)](https://github.com/stdlib-js/stdlib/pull/3938) _(by stdlib-bot, Philipp Burckhardt)_
-   [`e43aaa9`](https://github.com/stdlib-js/stdlib/commit/e43aaa95f790584e26f189ab52267108bb423231) - **docs:** update REPL namespace documentation [(#3917)](https://github.com/stdlib-js/stdlib/pull/3917) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2c01b65`](https://github.com/stdlib-js/stdlib/commit/2c01b654e7fcfae9bde232c5fdda10d14f02e30e) - **feat:** add `ndfilterMap` to namespace _(by Athan Reines)_
-   [`9ecc3d3`](https://github.com/stdlib-js/stdlib/commit/9ecc3d30b87a0d38cc7608a35024a15c920a2f29) - **feat:** add `ndreject` to namespace _(by Athan Reines)_
-   [`b916456`](https://github.com/stdlib-js/stdlib/commit/b916456714e3c8a4ecaf6605adf4d36188e924f9) - **feat:** add `ndmap` and `ndfilter` to namespace _(by Athan Reines)_
-   [`05e89d4`](https://github.com/stdlib-js/stdlib/commit/05e89d4f958c0363eddb9e18e1610289e8d64377) - **docs:** update REPL namespace documentation [(#3901)](https://github.com/stdlib-js/stdlib/pull/3901) _(by stdlib-bot, Philipp Burckhardt)_
-   [`3ca45d4`](https://github.com/stdlib-js/stdlib/commit/3ca45d4730ad8d978e424697e9bffc5bc5ba6680) - **docs:** update REPL namespace documentation [(#3381)](https://github.com/stdlib-js/stdlib/pull/3381) _(by stdlib-bot, Philipp Burckhardt)_
-   [`911e839`](https://github.com/stdlib-js/stdlib/commit/911e839cdb47eaed4d3f87f9b22d337c872fbbb3) - **docs:** update REPL namespace documentation [(#3372)](https://github.com/stdlib-js/stdlib/pull/3372) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ec7e37b`](https://github.com/stdlib-js/stdlib/commit/ec7e37ba8e0cfe8c1fc867b7be255c79204034a2) - **docs:** update REPL namespace documentation [(#3347)](https://github.com/stdlib-js/stdlib/pull/3347) _(by stdlib-bot, Philipp Burckhardt)_
-   [`9bd5c73`](https://github.com/stdlib-js/stdlib/commit/9bd5c7354dbaef3eed1668d0810a3f9565d6a131) - **docs:** update REPL namespace documentation [(#3306)](https://github.com/stdlib-js/stdlib/pull/3306) _(by stdlib-bot, Philipp Burckhardt)_
-   [`904955f`](https://github.com/stdlib-js/stdlib/commit/904955fccc1822538bae36c7923b67552109434e) - **docs:** update REPL namespace documentation [(#3289)](https://github.com/stdlib-js/stdlib/pull/3289) _(by stdlib-bot, Philipp Burckhardt)_
-   [`9a17ee3`](https://github.com/stdlib-js/stdlib/commit/9a17ee335a8976668e06b0a41f4b19cb52380b5b) - **docs:** update REPL namespace documentation [(#3276)](https://github.com/stdlib-js/stdlib/pull/3276) _(by stdlib-bot, Philipp Burckhardt)_
-   [`875c99b`](https://github.com/stdlib-js/stdlib/commit/875c99b2678d23e498677e367d5cd6079d0f55fb) - **docs:** update REPL namespace documentation [(#3265)](https://github.com/stdlib-js/stdlib/pull/3265) _(by stdlib-bot, Philipp Burckhardt)_
-   [`c314fa2`](https://github.com/stdlib-js/stdlib/commit/c314fa2199b8bd2deaac417184a363e5272767a5) - **docs:** update REPL namespace documentation [(#3260)](https://github.com/stdlib-js/stdlib/pull/3260) _(by stdlib-bot, Philipp Burckhardt)_
-   [`136231d`](https://github.com/stdlib-js/stdlib/commit/136231d9a98f773662721f5f292cf50220deafc5) - **docs:** update REPL namespace documentation [(#3244)](https://github.com/stdlib-js/stdlib/pull/3244) _(by stdlib-bot, Philipp Burckhardt)_
-   [`917119f`](https://github.com/stdlib-js/stdlib/commit/917119ffdb42b1c15214e4accaa928b279bcd17b) - **feat:** add support for custom keybindings and editor actions in the REPL [(#2739)](https://github.com/stdlib-js/stdlib/pull/2739) _(by Snehil Shah, Athan Reines)_
-   [`4b1d77d`](https://github.com/stdlib-js/stdlib/commit/4b1d77d2bd001d5970ce93230765a579fb41349d) - **docs:** update REPL namespace documentation [(#3191)](https://github.com/stdlib-js/stdlib/pull/3191) _(by stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gururaj Gurram
-   Philipp Burckhardt
-   Snehil Shah
-   Vinit Pandit

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.3">

## 0.3.3 (2024-11-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.2">

## 0.3.2 (2024-11-05)

<section class="features">

### Features

-   [`254fa9e`](https://github.com/stdlib-js/stdlib/commit/254fa9ec906b3a6c62551e13bd0aeef1c1f29af8) - add `Float64ArrayLE`, `Float32ArrayLE`, `Float64ArrayFE`, and `Float32ArrayFE` to namespace
-   [`a215aba`](https://github.com/stdlib-js/stdlib/commit/a215aba7a01decc26f4d2ea7b7046dafc69ea96b) - add `isndarrayLikeWithDataType` to namespace
-   [`8504393`](https://github.com/stdlib-js/stdlib/commit/85043930ff962e1c6393c55f7aa6d481b4ea2b81) - add `isWebAssemblyMemory` and `WebAssemblyMemory` to namespace
-   [`83db58c`](https://github.com/stdlib-js/stdlib/commit/83db58c78ba649fc42033594017b7fbb6f68b105) - add `hasBtoaSupport` to namespace
-   [`48de2fd`](https://github.com/stdlib-js/stdlib/commit/48de2fd9ae3b4ffa9679e86d86339848ca612399) - add `hasAtobSupport` to namespace
-   [`9a87aca`](https://github.com/stdlib-js/stdlib/commit/9a87acae9646c4c790c1fab60aa1d2f496c18898) - add `isEqualArray` to namespace
-   [`a4c2f06`](https://github.com/stdlib-js/stdlib/commit/a4c2f063712c20edd385b5182bd6f2cb5d58af33) - add `isSameArrayLike` to namespace

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`890427d`](https://github.com/stdlib-js/stdlib/commit/890427dadc0cf66b1569bb0ad739bb63abbf620e) - update completer to generate REPL completions for member expressions [(#2883)](https://github.com/stdlib-js/stdlib/pull/2883)

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#2882](https://github.com/stdlib-js/stdlib/issues/2882)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`254fa9e`](https://github.com/stdlib-js/stdlib/commit/254fa9ec906b3a6c62551e13bd0aeef1c1f29af8) - **feat:** add `Float64ArrayLE`, `Float32ArrayLE`, `Float64ArrayFE`, and `Float32ArrayFE` to namespace _(by Athan Reines)_
-   [`a215aba`](https://github.com/stdlib-js/stdlib/commit/a215aba7a01decc26f4d2ea7b7046dafc69ea96b) - **feat:** add `isndarrayLikeWithDataType` to namespace _(by Athan Reines)_
-   [`f387603`](https://github.com/stdlib-js/stdlib/commit/f387603e739f88a38af3263ce6ff675ad903ee8c) - **docs:** consistently use declarative instead of imperative sentences outside of intros _(by Philipp Burckhardt)_
-   [`8504393`](https://github.com/stdlib-js/stdlib/commit/85043930ff962e1c6393c55f7aa6d481b4ea2b81) - **feat:** add `isWebAssemblyMemory` and `WebAssemblyMemory` to namespace _(by Athan Reines)_
-   [`83db58c`](https://github.com/stdlib-js/stdlib/commit/83db58c78ba649fc42033594017b7fbb6f68b105) - **feat:** add `hasBtoaSupport` to namespace _(by Athan Reines)_
-   [`48de2fd`](https://github.com/stdlib-js/stdlib/commit/48de2fd9ae3b4ffa9679e86d86339848ca612399) - **feat:** add `hasAtobSupport` to namespace _(by Athan Reines)_
-   [`9a87aca`](https://github.com/stdlib-js/stdlib/commit/9a87acae9646c4c790c1fab60aa1d2f496c18898) - **feat:** add `isEqualArray` to namespace _(by Athan Reines)_
-   [`a4c2f06`](https://github.com/stdlib-js/stdlib/commit/a4c2f063712c20edd385b5182bd6f2cb5d58af33) - **feat:** add `isSameArrayLike` to namespace _(by Athan Reines)_
-   [`890427d`](https://github.com/stdlib-js/stdlib/commit/890427dadc0cf66b1569bb0ad739bb63abbf620e) - **fix:** update completer to generate REPL completions for member expressions [(#2883)](https://github.com/stdlib-js/stdlib/pull/2883) _(by Snehil Shah)_
-   [`cf3e438`](https://github.com/stdlib-js/stdlib/commit/cf3e438ecf31260a2ebff08f6477bb4d29e8440f) - **docs:** update REPL docs _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Snehil Shah

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.1">

## 0.3.1 (2024-08-18)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-08-17)

<section class="features">

### Features

-   [`febd8ae`](https://github.com/stdlib-js/stdlib/commit/febd8aef423c3723ef0cd4a04099faa609a38f51) - add `ndarraylike2ndarray` to namespace
-   [`09ffebd`](https://github.com/stdlib-js/stdlib/commit/09ffebdfb9946b7e1dd3c05f58637fa073f0a121) - add `nditerInterleaveSubarrays` to namespace
-   [`2939f56`](https://github.com/stdlib-js/stdlib/commit/2939f5662f4bc178fbe532579380d501ff7b1722) - add `nditerStacks` to namespace
-   [`082324e`](https://github.com/stdlib-js/stdlib/commit/082324e5c0004e84a711debf81abebf755399f29) - add `nditerSubarrays` to namespace
-   [`972755d`](https://github.com/stdlib-js/stdlib/commit/972755d8507363c18125a4e046d98ed1010dd531) - add `nditerSelectDimension` to namespace
-   [`07e6c5a`](https://github.com/stdlib-js/stdlib/commit/07e6c5a761733e6df1258f3b35b75e2b271fcbed) - allow cycling through multiline commands using up/down in the REPL
-   [`7ba179c`](https://github.com/stdlib-js/stdlib/commit/7ba179c7f5084a9b39e22282b02e756c9671d6d8) - add bracketed-paste mode in the REPL [(#2502)](https://github.com/stdlib-js/stdlib/pull/2502)
-   [`1d49bc6`](https://github.com/stdlib-js/stdlib/commit/1d49bc691bce0634e7b0508ff495fca733c48a4c) - add UX to cycle through completions in the REPL [(#2463)](https://github.com/stdlib-js/stdlib/pull/2463)
-   [`32b9ebf`](https://github.com/stdlib-js/stdlib/commit/32b9ebf43277ff53c079178ba563fb3597661a2c) - add multiline editing in the REPL [(#2347)](https://github.com/stdlib-js/stdlib/pull/2347)
-   [`ba4ce18`](https://github.com/stdlib-js/stdlib/commit/ba4ce188564d0207be7b780202dd4966b8dd9459) - add `amskput` to namespace
-   [`3eb5c20`](https://github.com/stdlib-js/stdlib/commit/3eb5c20b3f683af347e2c502e670fb6c88527f6c) - add `aplace` to namespace
-   [`89026af`](https://github.com/stdlib-js/stdlib/commit/89026afb85fbfa45556d4921686c62092f4fe8b8) - add `aput` to namespace
-   [`0856277`](https://github.com/stdlib-js/stdlib/commit/0856277523259bf111501ff87d54104b361b0fa3) - add combined styles and inbuilt syntax highlighting themes in the REPL
-   [`b4c12b7`](https://github.com/stdlib-js/stdlib/commit/b4c12b7c4a76cfa71164d1b01fcbfca0426abbb3) - add APIs, commands, and tests for REPL syntax-highlighting [(#2291)](https://github.com/stdlib-js/stdlib/pull/2291)
-   [`24f4a8f`](https://github.com/stdlib-js/stdlib/commit/24f4a8f24c08dd25686afc4cfb78be2e0045e844) - add syntax highlighting in the REPL
-   [`0f9acd1`](https://github.com/stdlib-js/stdlib/commit/0f9acd17de012dfe755c98b602d6bb3dbe1e8117) - add `BooleanArray` to namespace
-   [`3c31c1f`](https://github.com/stdlib-js/stdlib/commit/3c31c1f54ab8e1148fd9104490245c60cc540280) - add REPL pager [(#2162)](https://github.com/stdlib-js/stdlib/pull/2162)
-   [`ebd3878`](https://github.com/stdlib-js/stdlib/commit/ebd387824c78db3211ab39ab118db6984f6b0342) - update default welcome message in the REPL [(#2178)](https://github.com/stdlib-js/stdlib/pull/2178)
-   [`8314237`](https://github.com/stdlib-js/stdlib/commit/83142377ae560b0b7b741437d117ea4aa6a0bd6d) - add support for auto-closing brackets/quotations in the REPL [(#1680)](https://github.com/stdlib-js/stdlib/pull/1680)
-   [`ec283ec`](https://github.com/stdlib-js/stdlib/commit/ec283ec9a2a522454f15a62cecd03e7e94b2ded8) - add auto-completion preview for REPL [(#1832)](https://github.com/stdlib-js/stdlib/pull/1832)
-   [`d7798af`](https://github.com/stdlib-js/stdlib/commit/d7798af1c843b45d0bbaddadedf7d2961a1b3f57) - add `isNonNegativeFinite` to namespace
-   [`2370b7a`](https://github.com/stdlib-js/stdlib/commit/2370b7a641a0d6c4029e2127d6fd2235458b19e3) - update REPL namespace [(#1352)](https://github.com/stdlib-js/stdlib/pull/1352)
-   [`503c398`](https://github.com/stdlib-js/stdlib/commit/503c3988cb7288cf04abe493c08c65d73a63c3d7) - add `amskreject` to namespace
-   [`04230cb`](https://github.com/stdlib-js/stdlib/commit/04230cb82fa47bd9db6ea4e29ffc3197ece4162a) - add `amskfilter` to namespace
-   [`3eb2db4`](https://github.com/stdlib-js/stdlib/commit/3eb2db4e846f2345bcb2531f89d55d0db1e14f58) - add `ArrayIndex` to namespace
-   [`7ee6291`](https://github.com/stdlib-js/stdlib/commit/7ee62912eb404662378afa904f5a712f4a205915) - add `atake` to namespace
-   [`92abe29`](https://github.com/stdlib-js/stdlib/commit/92abe29dd113ec750b19579f04f781f2a0bb215c) - add `array2fancy` to namespace
-   [`c1d6282`](https://github.com/stdlib-js/stdlib/commit/c1d628249a148deaf55e5b87493b7cdec6a527b8) - add `scalar2array` to namespace
-   [`8c4047d`](https://github.com/stdlib-js/stdlib/commit/8c4047dc8b22a290115beb849387bde1e2e181bf) - add `arrayMostlySafeCasts` to namespace

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`ea8303e`](https://github.com/stdlib-js/stdlib/commit/ea8303ef51c9543e3c9b3851fb2ad0a5e8dfee01) - handle tokens where start idx is greater than end idx [(#2770)](https://github.com/stdlib-js/stdlib/pull/2770)
-   [`e9c6d40`](https://github.com/stdlib-js/stdlib/commit/e9c6d40b6d4d382f39d2000c1996bd7ccb38bb29) - remove syntax highlighting upon encountering invalid JS [(#2758)](https://github.com/stdlib-js/stdlib/pull/2758)
-   [`9147f69`](https://github.com/stdlib-js/stdlib/commit/9147f69c07d3beda24bfa63870694fbf7500d707) - `example` command hanging in REPL when executing multi-line code
-   [`3efb708`](https://github.com/stdlib-js/stdlib/commit/3efb708f62e31603de837db5621522471046b27d) - address duplicate token bug when syntax-highlighting [(#2542)](https://github.com/stdlib-js/stdlib/pull/2542)
-   [`d2cd4c3`](https://github.com/stdlib-js/stdlib/commit/d2cd4c355302240f3cc5ea050d349715925be744) - pass options when parsing to suppress warnings in the REPL [(#2430)](https://github.com/stdlib-js/stdlib/pull/2430)
-   [`1036087`](https://github.com/stdlib-js/stdlib/commit/1036087c00b59cc981530e66b3aaa1966c6e74e0) - prevent access if properties couldn't be resolved when syntax highlighting in the REPL [(#2412)](https://github.com/stdlib-js/stdlib/pull/2412)
-   [`9f3dcaf`](https://github.com/stdlib-js/stdlib/commit/9f3dcaf4d19fde9e7066f7dc12a49cf87e6fd0f7) - update error message
-   [`e09eeb2`](https://github.com/stdlib-js/stdlib/commit/e09eeb231ec9800aa3e934f4d34bb6991a7afe81) - update incorrect `isScrollable` constraints [(#2293)](https://github.com/stdlib-js/stdlib/pull/2293)
-   [`e538d43`](https://github.com/stdlib-js/stdlib/commit/e538d43621114665ffc5996c712abb65b270615a) - resolve clash between syntax-highlighter and auto-closer [(#2290)](https://github.com/stdlib-js/stdlib/pull/2290)
-   [`8716bc6`](https://github.com/stdlib-js/stdlib/commit/8716bc6111c276ff676025afa230a2fb1f30932f) - resolve unrecognized keywords bug in the REPL's syntax-highlighter [(#2284)](https://github.com/stdlib-js/stdlib/pull/2284)
-   [`20f7d59`](https://github.com/stdlib-js/stdlib/commit/20f7d594aca03eae0e31659ca62bb9a8d2a4f2ce) - remove `SIGWINCH` listener upon closing the REPL [(#2205)](https://github.com/stdlib-js/stdlib/pull/2205)
-   [`73268b2`](https://github.com/stdlib-js/stdlib/commit/73268b2185a0631712846385572c6efafbcb402f) - only perform argument validation if provided an argument

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

A total of 7 issues were closed in this release:

[#1672](https://github.com/stdlib-js/stdlib/issues/1672), [#1775](https://github.com/stdlib-js/stdlib/issues/1775), [#2060](https://github.com/stdlib-js/stdlib/issues/2060), [#2068](https://github.com/stdlib-js/stdlib/issues/2068), [#2149](https://github.com/stdlib-js/stdlib/issues/2149), [#2175](https://github.com/stdlib-js/stdlib/issues/2175), [#2429](https://github.com/stdlib-js/stdlib/issues/2429)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`5f8d50d`](https://github.com/stdlib-js/stdlib/commit/5f8d50df14363d06b37b9d551143fc46d90c79bd) - **docs:** update REPL docs _(by Athan Reines)_
-   [`febd8ae`](https://github.com/stdlib-js/stdlib/commit/febd8aef423c3723ef0cd4a04099faa609a38f51) - **feat:** add `ndarraylike2ndarray` to namespace _(by Athan Reines)_
-   [`09ffebd`](https://github.com/stdlib-js/stdlib/commit/09ffebdfb9946b7e1dd3c05f58637fa073f0a121) - **feat:** add `nditerInterleaveSubarrays` to namespace _(by Athan Reines)_
-   [`2939f56`](https://github.com/stdlib-js/stdlib/commit/2939f5662f4bc178fbe532579380d501ff7b1722) - **feat:** add `nditerStacks` to namespace _(by Athan Reines)_
-   [`082324e`](https://github.com/stdlib-js/stdlib/commit/082324e5c0004e84a711debf81abebf755399f29) - **feat:** add `nditerSubarrays` to namespace _(by Athan Reines)_
-   [`972755d`](https://github.com/stdlib-js/stdlib/commit/972755d8507363c18125a4e046d98ed1010dd531) - **feat:** add `nditerSelectDimension` to namespace _(by Athan Reines)_
-   [`ea8303e`](https://github.com/stdlib-js/stdlib/commit/ea8303ef51c9543e3c9b3851fb2ad0a5e8dfee01) - **fix:** handle tokens where start idx is greater than end idx [(#2770)](https://github.com/stdlib-js/stdlib/pull/2770) _(by Snehil Shah)_
-   [`e9c6d40`](https://github.com/stdlib-js/stdlib/commit/e9c6d40b6d4d382f39d2000c1996bd7ccb38bb29) - **fix:** remove syntax highlighting upon encountering invalid JS [(#2758)](https://github.com/stdlib-js/stdlib/pull/2758) _(by Snehil Shah)_
-   [`19abe48`](https://github.com/stdlib-js/stdlib/commit/19abe4839bccbe8b48fbe92f5fe9737f304a5cd9) - **docs:** update REPL namespace documentation [(#2722)](https://github.com/stdlib-js/stdlib/pull/2722) _(by stdlib-bot, Athan Reines)_
-   [`9147f69`](https://github.com/stdlib-js/stdlib/commit/9147f69c07d3beda24bfa63870694fbf7500d707) - **fix:** `example` command hanging in REPL when executing multi-line code _(by Snehil Shah)_
-   [`70eb789`](https://github.com/stdlib-js/stdlib/commit/70eb789d85da0d8470a61b28ed0a80ee1009d179) - **docs:** update REPL namespace documentation [(#2682)](https://github.com/stdlib-js/stdlib/pull/2682) _(by stdlib-bot, Philipp Burckhardt)_
-   [`cde60a1`](https://github.com/stdlib-js/stdlib/commit/cde60a1467279750ff2251c5663e99fb7983841a) - **docs:** update REPL namespace documentation [(#2643)](https://github.com/stdlib-js/stdlib/pull/2643) _(by stdlib-bot, Athan Reines)_
-   [`80f7ad3`](https://github.com/stdlib-js/stdlib/commit/80f7ad36ad9e628790134c70c44a2556ef726d7d) - **docs:** update REPL namespace documentation [(#2638)](https://github.com/stdlib-js/stdlib/pull/2638) _(by stdlib-bot, Philipp Burckhardt)_
-   [`c89a171`](https://github.com/stdlib-js/stdlib/commit/c89a171db9b4664582fab09dc95a5cc3b58f9f21) - **docs:** update REPL namespace documentation [(#2629)](https://github.com/stdlib-js/stdlib/pull/2629) _(by stdlib-bot, Athan Reines)_
-   [`203021c`](https://github.com/stdlib-js/stdlib/commit/203021c9da83f016ffd95e454fa057d8cc37b0ff) - **docs:** update REPL namespace documentation [(#2622)](https://github.com/stdlib-js/stdlib/pull/2622) _(by stdlib-bot, Philipp Burckhardt)_
-   [`07e6c5a`](https://github.com/stdlib-js/stdlib/commit/07e6c5a761733e6df1258f3b35b75e2b271fcbed) - **feat:** allow cycling through multiline commands using up/down in the REPL _(by Snehil Shah, Athan Reines)_
-   [`60d2ac3`](https://github.com/stdlib-js/stdlib/commit/60d2ac3e0057d35e6b2208426cc354320172e471) - **docs:** update REPL namespace documentation [(#2608)](https://github.com/stdlib-js/stdlib/pull/2608) _(by stdlib-bot, Athan Reines)_
-   [`1dc058b`](https://github.com/stdlib-js/stdlib/commit/1dc058b58ad228b9b0d2ca29055a4243473bbddf) - **docs:** update REPL namespace documentation [(#2594)](https://github.com/stdlib-js/stdlib/pull/2594) _(by stdlib-bot, Athan Reines)_
-   [`6a106fb`](https://github.com/stdlib-js/stdlib/commit/6a106fb22401248973ca13b614a01712acbd5108) - **docs:** update REPL namespace documentation [(#2592)](https://github.com/stdlib-js/stdlib/pull/2592) _(by stdlib-bot, Athan Reines)_
-   [`b184238`](https://github.com/stdlib-js/stdlib/commit/b184238b9400c26d444ba5e843002641702b58e5) - **docs:** update REPL namespace documentation [(#2583)](https://github.com/stdlib-js/stdlib/pull/2583) _(by stdlib-bot, Athan Reines)_
-   [`f35fdd1`](https://github.com/stdlib-js/stdlib/commit/f35fdd13e3fea642378db323489aef31b0d3612a) - **docs:** update REPL namespace documentation [(#2581)](https://github.com/stdlib-js/stdlib/pull/2581) _(by stdlib-bot, Athan Reines)_
-   [`8751c3d`](https://github.com/stdlib-js/stdlib/commit/8751c3d047ee41fa9b12901121180416484f5348) - **docs:** update REPL namespace documentation [(#2570)](https://github.com/stdlib-js/stdlib/pull/2570) _(by stdlib-bot, Athan Reines)_
-   [`3efb708`](https://github.com/stdlib-js/stdlib/commit/3efb708f62e31603de837db5621522471046b27d) - **fix:** address duplicate token bug when syntax-highlighting [(#2542)](https://github.com/stdlib-js/stdlib/pull/2542) _(by Snehil Shah)_
-   [`243ab4d`](https://github.com/stdlib-js/stdlib/commit/243ab4d0fbd85acb68e4d394fac8d84011621a44) - **test:** fix failing tests in the REPL [(#2516)](https://github.com/stdlib-js/stdlib/pull/2516) _(by Snehil Shah)_
-   [`350aa53`](https://github.com/stdlib-js/stdlib/commit/350aa5304430dc8b29acbfcecd9e23f9780bd5a1) - **docs:** update REPL namespace documentation [(#2515)](https://github.com/stdlib-js/stdlib/pull/2515) _(by stdlib-bot, Athan Reines)_
-   [`7ba179c`](https://github.com/stdlib-js/stdlib/commit/7ba179c7f5084a9b39e22282b02e756c9671d6d8) - **feat:** add bracketed-paste mode in the REPL [(#2502)](https://github.com/stdlib-js/stdlib/pull/2502) _(by Snehil Shah, Athan Reines)_
-   [`fc67e61`](https://github.com/stdlib-js/stdlib/commit/fc67e61cc8ee361df87fdceae53d32baaa4b54ff) - **docs:** update REPL namespace documentation [(#2511)](https://github.com/stdlib-js/stdlib/pull/2511) _(by stdlib-bot, Athan Reines)_
-   [`77ecc3a`](https://github.com/stdlib-js/stdlib/commit/77ecc3afbf2912bb05a5d995439e04e26017db34) - **docs:** update REPL namespace documentation [(#2501)](https://github.com/stdlib-js/stdlib/pull/2501) _(by stdlib-bot, Athan Reines)_
-   [`d2d46ed`](https://github.com/stdlib-js/stdlib/commit/d2d46ed18a02ef8c87a8a896c4bd4b46343a631b) - **docs:** update REPL namespace documentation [(#2492)](https://github.com/stdlib-js/stdlib/pull/2492) _(by stdlib-bot, Athan Reines)_
-   [`bdb7cab`](https://github.com/stdlib-js/stdlib/commit/bdb7cab0555da6d3402470aee39cdb31b7a447bd) - **docs:** update REPL namespace documentation [(#2491)](https://github.com/stdlib-js/stdlib/pull/2491) _(by stdlib-bot, Athan Reines)_
-   [`1d49bc6`](https://github.com/stdlib-js/stdlib/commit/1d49bc691bce0634e7b0508ff495fca733c48a4c) - **feat:** add UX to cycle through completions in the REPL [(#2463)](https://github.com/stdlib-js/stdlib/pull/2463) _(by Snehil Shah, Athan Reines)_
-   [`581f17e`](https://github.com/stdlib-js/stdlib/commit/581f17e69ee0eb47edc2991a3e80581f7e0af338) - **docs:** update REPL namespace documentation [(#2476)](https://github.com/stdlib-js/stdlib/pull/2476) _(by stdlib-bot, Athan Reines)_
-   [`cfb39e4`](https://github.com/stdlib-js/stdlib/commit/cfb39e4db74a499fe1af830de2f9305ae851a7b2) - **docs:** update REPL namespace documentation [(#2475)](https://github.com/stdlib-js/stdlib/pull/2475) _(by stdlib-bot, Athan Reines)_
-   [`ebb5167`](https://github.com/stdlib-js/stdlib/commit/ebb5167498be78c43ce809bc13a750f1c0887c7b) - **docs:** update REPL namespace documentation [(#2467)](https://github.com/stdlib-js/stdlib/pull/2467) _(by stdlib-bot, Athan Reines)_
-   [`882197a`](https://github.com/stdlib-js/stdlib/commit/882197a80d23b8488e3d1b169151e506477e5b9a) - **docs:** update REPL namespace documentation [(#2466)](https://github.com/stdlib-js/stdlib/pull/2466) _(by stdlib-bot, Athan Reines)_
-   [`bfd5b70`](https://github.com/stdlib-js/stdlib/commit/bfd5b7069450a1469a68e52b334412596b8892ef) - **docs:** update REPL namespace documentation [(#2444)](https://github.com/stdlib-js/stdlib/pull/2444) _(by stdlib-bot, Athan Reines)_
-   [`211c131`](https://github.com/stdlib-js/stdlib/commit/211c131b7d2761f3627a85ab47fdb07e242cc1c9) - **docs:** update REPL namespace documentation [(#2437)](https://github.com/stdlib-js/stdlib/pull/2437) _(by stdlib-bot, Athan Reines)_
-   [`6c876f7`](https://github.com/stdlib-js/stdlib/commit/6c876f7b20aecec6d2f402e11a04c4c9f5e19215) - **docs:** update REPL namespace documentation [(#2433)](https://github.com/stdlib-js/stdlib/pull/2433) _(by stdlib-bot, Athan Reines)_
-   [`d2cd4c3`](https://github.com/stdlib-js/stdlib/commit/d2cd4c355302240f3cc5ea050d349715925be744) - **fix:** pass options when parsing to suppress warnings in the REPL [(#2430)](https://github.com/stdlib-js/stdlib/pull/2430) _(by Snehil Shah)_
-   [`a480f85`](https://github.com/stdlib-js/stdlib/commit/a480f8585f99b2ff001b470c82414cf34a61c59d) - **docs:** update REPL namespace documentation [(#2427)](https://github.com/stdlib-js/stdlib/pull/2427) _(by stdlib-bot, Athan Reines)_
-   [`1c27809`](https://github.com/stdlib-js/stdlib/commit/1c27809160d824ad9c4b7f21f1f36e7331df7e9d) - **docs:** update REPL namespace documentation [(#2426)](https://github.com/stdlib-js/stdlib/pull/2426) _(by stdlib-bot, Athan Reines)_
-   [`32b9ebf`](https://github.com/stdlib-js/stdlib/commit/32b9ebf43277ff53c079178ba563fb3597661a2c) - **feat:** add multiline editing in the REPL [(#2347)](https://github.com/stdlib-js/stdlib/pull/2347) _(by Snehil Shah, Athan Reines)_
-   [`ba4ce18`](https://github.com/stdlib-js/stdlib/commit/ba4ce188564d0207be7b780202dd4966b8dd9459) - **feat:** add `amskput` to namespace _(by Athan Reines)_
-   [`3eb5c20`](https://github.com/stdlib-js/stdlib/commit/3eb5c20b3f683af347e2c502e670fb6c88527f6c) - **feat:** add `aplace` to namespace _(by Athan Reines)_
-   [`642d473`](https://github.com/stdlib-js/stdlib/commit/642d4736d832f9dd83df75dfb63e56689e1fbb89) - **docs:** update REPL namespace documentation [(#2416)](https://github.com/stdlib-js/stdlib/pull/2416) _(by stdlib-bot, Athan Reines)_
-   [`1036087`](https://github.com/stdlib-js/stdlib/commit/1036087c00b59cc981530e66b3aaa1966c6e74e0) - **fix:** prevent access if properties couldn't be resolved when syntax highlighting in the REPL [(#2412)](https://github.com/stdlib-js/stdlib/pull/2412) _(by Snehil Shah)_
-   [`379f259`](https://github.com/stdlib-js/stdlib/commit/379f259a529c407cf0223754ee171fce76e8f5d8) - **docs:** update REPL namespace documentation [(#2403)](https://github.com/stdlib-js/stdlib/pull/2403) _(by stdlib-bot, Athan Reines)_
-   [`e9f214c`](https://github.com/stdlib-js/stdlib/commit/e9f214cdceba326caa8a129f5da941db6fe5ba08) - **docs:** update REPL docs _(by Athan Reines)_
-   [`89026af`](https://github.com/stdlib-js/stdlib/commit/89026afb85fbfa45556d4921686c62092f4fe8b8) - **feat:** add `aput` to namespace _(by Athan Reines)_
-   [`e190a54`](https://github.com/stdlib-js/stdlib/commit/e190a548efc5748792be5e3af09b7d2bf8dd987e) - **docs:** update REPL namespace documentation [(#2395)](https://github.com/stdlib-js/stdlib/pull/2395) _(by stdlib-bot, Athan Reines)_
-   [`aae2b85`](https://github.com/stdlib-js/stdlib/commit/aae2b854ea853853efa6504c6953a8c5aa703128) - **docs:** update REPL namespace documentation [(#2386)](https://github.com/stdlib-js/stdlib/pull/2386) _(by stdlib-bot, Athan Reines)_
-   [`1e37af3`](https://github.com/stdlib-js/stdlib/commit/1e37af3451db8f67aa91f5e34f33a728526025a9) - **docs:** update REPL namespace documentation [(#2382)](https://github.com/stdlib-js/stdlib/pull/2382) _(by stdlib-bot, Athan Reines)_
-   [`d74b255`](https://github.com/stdlib-js/stdlib/commit/d74b255023995b97cb1fc3bdaa76a1fc86a0ce1c) - **docs:** update REPL namespace documentation [(#2372)](https://github.com/stdlib-js/stdlib/pull/2372) _(by stdlib-bot, Athan Reines)_
-   [`0856277`](https://github.com/stdlib-js/stdlib/commit/0856277523259bf111501ff87d54104b361b0fa3) - **feat:** add combined styles and inbuilt syntax highlighting themes in the REPL _(by Snehil Shah)_
-   [`9f3dcaf`](https://github.com/stdlib-js/stdlib/commit/9f3dcaf4d19fde9e7066f7dc12a49cf87e6fd0f7) - **fix:** update error message _(by Athan Reines)_
-   [`b4c12b7`](https://github.com/stdlib-js/stdlib/commit/b4c12b7c4a76cfa71164d1b01fcbfca0426abbb3) - **feat:** add APIs, commands, and tests for REPL syntax-highlighting [(#2291)](https://github.com/stdlib-js/stdlib/pull/2291) _(by Snehil Shah, Athan Reines)_
-   [`f85ed2a`](https://github.com/stdlib-js/stdlib/commit/f85ed2aafc393cfbac360ad14b97af0ee28d450b) - **docs:** update REPL namespace documentation [(#2313)](https://github.com/stdlib-js/stdlib/pull/2313) _(by stdlib-bot, Athan Reines)_
-   [`f10aaf2`](https://github.com/stdlib-js/stdlib/commit/f10aaf243f4873488bf04be4bad5c3d256415a41) - **docs:** update REPL namespace documentation [(#2311)](https://github.com/stdlib-js/stdlib/pull/2311) _(by stdlib-bot, Athan Reines)_
-   [`34ef42e`](https://github.com/stdlib-js/stdlib/commit/34ef42e798ec33e1f3a62a15a460dd46ae7c693c) - **docs:** update REPL namespace documentation [(#2246)](https://github.com/stdlib-js/stdlib/pull/2246) _(by stdlib-bot, Athan Reines)_
-   [`e09eeb2`](https://github.com/stdlib-js/stdlib/commit/e09eeb231ec9800aa3e934f4d34bb6991a7afe81) - **fix:** update incorrect `isScrollable` constraints [(#2293)](https://github.com/stdlib-js/stdlib/pull/2293) _(by Snehil Shah)_
-   [`e538d43`](https://github.com/stdlib-js/stdlib/commit/e538d43621114665ffc5996c712abb65b270615a) - **fix:** resolve clash between syntax-highlighter and auto-closer [(#2290)](https://github.com/stdlib-js/stdlib/pull/2290) _(by Snehil Shah)_
-   [`8716bc6`](https://github.com/stdlib-js/stdlib/commit/8716bc6111c276ff676025afa230a2fb1f30932f) - **fix:** resolve unrecognized keywords bug in the REPL's syntax-highlighter [(#2284)](https://github.com/stdlib-js/stdlib/pull/2284) _(by Snehil Shah)_
-   [`24f4a8f`](https://github.com/stdlib-js/stdlib/commit/24f4a8f24c08dd25686afc4cfb78be2e0045e844) - **feat:** add syntax highlighting in the REPL _(by Snehil Shah)_
-   [`0f9acd1`](https://github.com/stdlib-js/stdlib/commit/0f9acd17de012dfe755c98b602d6bb3dbe1e8117) - **feat:** add `BooleanArray` to namespace _(by Athan Reines)_
-   [`aaa391a`](https://github.com/stdlib-js/stdlib/commit/aaa391a46214c21dca294506d06ac0b3d59512ce) - **chore:** fix typos _(by Philipp Burckhardt)_
-   [`732ffb9`](https://github.com/stdlib-js/stdlib/commit/732ffb9a6b406d10830a7aa075e7f23b565cf6ed) - **docs:** update REPL namespace documentation [(#2230)](https://github.com/stdlib-js/stdlib/pull/2230) _(by stdlib-bot, Philipp Burckhardt)_
-   [`b03225f`](https://github.com/stdlib-js/stdlib/commit/b03225f9f443f49fa4c1a2fd089492477f15149e) - **docs:** update REPL namespace documentation [(#2218)](https://github.com/stdlib-js/stdlib/pull/2218) _(by stdlib-bot, Philipp Burckhardt)_
-   [`bd40019`](https://github.com/stdlib-js/stdlib/commit/bd40019a7096a1e9d42bbcdcba0fa685ad007401) - **docs:** update REPL namespace documentation [(#2212)](https://github.com/stdlib-js/stdlib/pull/2212) _(by stdlib-bot, Philipp Burckhardt)_
-   [`657f3c3`](https://github.com/stdlib-js/stdlib/commit/657f3c3ae3c84f68f3a4cf3ecc8f0aa4221a6ffe) - **docs:** update REPL namespace documentation [(#2211)](https://github.com/stdlib-js/stdlib/pull/2211) _(by stdlib-bot, Philipp Burckhardt)_
-   [`20f7d59`](https://github.com/stdlib-js/stdlib/commit/20f7d594aca03eae0e31659ca62bb9a8d2a4f2ce) - **fix:** remove `SIGWINCH` listener upon closing the REPL [(#2205)](https://github.com/stdlib-js/stdlib/pull/2205) _(by Snehil Shah)_
-   [`3c31c1f`](https://github.com/stdlib-js/stdlib/commit/3c31c1f54ab8e1148fd9104490245c60cc540280) - **feat:** add REPL pager [(#2162)](https://github.com/stdlib-js/stdlib/pull/2162) _(by Snehil Shah, Athan Reines)_
-   [`f8fef42`](https://github.com/stdlib-js/stdlib/commit/f8fef4209a29f42db6e0e4e1c7f805a61e7bdce6) - **docs:** update REPL namespace documentation [(#2196)](https://github.com/stdlib-js/stdlib/pull/2196) _(by stdlib-bot, Philipp Burckhardt)_
-   [`cf35195`](https://github.com/stdlib-js/stdlib/commit/cf351957a6915e763a158a1144ba021fcf0d139f) - **docs:** update REPL namespace documentation [(#2191)](https://github.com/stdlib-js/stdlib/pull/2191 ) _(by stdlib-bot, Philipp Burckhardt)_
-   [`3fff924`](https://github.com/stdlib-js/stdlib/commit/3fff924acdb74eb089ef6af49647e95adec52827) - **docs:** update REPL namespace documentation [(#2179)](https://github.com/stdlib-js/stdlib/pull/2179 ) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ebd3878`](https://github.com/stdlib-js/stdlib/commit/ebd387824c78db3211ab39ab118db6984f6b0342) - **feat:** update default welcome message in the REPL [(#2178)](https://github.com/stdlib-js/stdlib/pull/2178) _(by Snehil Shah)_
-   [`6abb1f9`](https://github.com/stdlib-js/stdlib/commit/6abb1f9e26f61682d499de7c9da9dbe2e63b9869) - **docs:** update REPL namespace documentation [(#2168)](https://github.com/stdlib-js/stdlib/pull/2168) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7b77a10`](https://github.com/stdlib-js/stdlib/commit/7b77a104797e468681ed6d9d648dcdd9ebddf58b) - **docs:** update REPL namespace documentation [(#2166)](https://github.com/stdlib-js/stdlib/pull/2166) _(by stdlib-bot, Philipp Burckhardt)_
-   [`0920a48`](https://github.com/stdlib-js/stdlib/commit/0920a48cc4d3c10c2bc46bdd74890ffd081bd927) - **docs:** update REPL namespace documentation [(#2165)](https://github.com/stdlib-js/stdlib/pull/2165 ) _(by stdlib-bot, Philipp Burckhardt)_
-   [`dc6e8dd`](https://github.com/stdlib-js/stdlib/commit/dc6e8dd3ddf88d549f86895691fdc763cd355468) - **docs:** update REPL namespace documentation [(#2164)](https://github.com/stdlib-js/stdlib/pull/2164) _(by stdlib-bot, Philipp Burckhardt)_
-   [`81e4ef7`](https://github.com/stdlib-js/stdlib/commit/81e4ef7468a8fb4e7efe347a78e8df9b182e55d3) - **chore:** add trailing newlines _(by Philipp Burckhardt)_
-   [`c91d15e`](https://github.com/stdlib-js/stdlib/commit/c91d15e07e9fd9f4ac754f55d48bd18935bf8536) - **build:** add trailing newlines in generated JSON files _(by Philipp Burckhardt)_
-   [`915a373`](https://github.com/stdlib-js/stdlib/commit/915a37396f39be83ba6c77bb5f6d9d515c6560c6) - **docs:** update REPL namespace documentation [(#2158)](https://github.com/stdlib-js/stdlib/pull/2158) _(by stdlib-bot, Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_
-   [`8314237`](https://github.com/stdlib-js/stdlib/commit/83142377ae560b0b7b741437d117ea4aa6a0bd6d) - **feat:** add support for auto-closing brackets/quotations in the REPL [(#1680)](https://github.com/stdlib-js/stdlib/pull/1680) _(by Snehil Shah, Athan Reines)_
-   [`d77bec4`](https://github.com/stdlib-js/stdlib/commit/d77bec435fec614c5cd5362e92d182c870261119) - **docs:** update REPL namespace documentation [(#2088)](https://github.com/stdlib-js/stdlib/pull/2088) _(by stdlib-bot, Philipp Burckhardt)_
-   [`73268b2`](https://github.com/stdlib-js/stdlib/commit/73268b2185a0631712846385572c6efafbcb402f) - **fix:** only perform argument validation if provided an argument _(by Athan Reines)_
-   [`9211a99`](https://github.com/stdlib-js/stdlib/commit/9211a99ff8c46f1192044d720f785ba772a0f8ce) - **docs:** update REPL namespace documentation [(#2086)](https://github.com/stdlib-js/stdlib/pull/2086 ) _(by stdlib-bot, Philipp Burckhardt)_
-   [`faddc92`](https://github.com/stdlib-js/stdlib/commit/faddc9267a1e6b74fae779c217e43bc9981c2c7b) - **docs:** update REPL namespace documentation [(#2052)](https://github.com/stdlib-js/stdlib/pull/2052) _(by stdlib-bot, Philipp Burckhardt)_
-   [`846f9b8`](https://github.com/stdlib-js/stdlib/commit/846f9b8e91c282ad8bd86d5bf7d83030127f13dc) - **docs:** update REPL namespace documentation [(#2048)](https://github.com/stdlib-js/stdlib/pull/2048) _(by stdlib-bot, Athan Reines)_
-   [`7abac40`](https://github.com/stdlib-js/stdlib/commit/7abac40d7e899d648086c2f1586ad1f1732ae0d5) - **docs:** update REPL namespace documentation [(#2045)](https://github.com/stdlib-js/stdlib/pull/2045) _(by stdlib-bot, Philipp Burckhardt)_
-   [`6737428`](https://github.com/stdlib-js/stdlib/commit/6737428ddbdde7fbde14f2bbfd905173f3293a76) - **docs:** update REPL namespace documentation [(#2043)](https://github.com/stdlib-js/stdlib/pull/2043) _(by stdlib-bot)_
-   [`ec283ec`](https://github.com/stdlib-js/stdlib/commit/ec283ec9a2a522454f15a62cecd03e7e94b2ded8) - **feat:** add auto-completion preview for REPL [(#1832)](https://github.com/stdlib-js/stdlib/pull/1832) _(by Tudor Pagu, Athan Reines, Tudor Stefan Pagu, stdlib-bot)_
-   [`719ac3e`](https://github.com/stdlib-js/stdlib/commit/719ac3ea7562fff42ca3600a918109152bfa5ae9) - **docs:** update REPL namespace documentation [(#2033)](https://github.com/stdlib-js/stdlib/pull/2033) _(by stdlib-bot, Athan Reines)_
-   [`3a06280`](https://github.com/stdlib-js/stdlib/commit/3a06280e3f66d21fb9fcf6aeefa91d76654b9ad4) - **docs:** update REPL namespace documentation [(#2023)](https://github.com/stdlib-js/stdlib/pull/2023) _(by stdlib-bot, Philipp Burckhardt)_
-   [`d761a25`](https://github.com/stdlib-js/stdlib/commit/d761a259c0e052fbde19930dda0a3c7603f9ad9c) - **docs:** update REPL namespace documentation [(#2022)](https://github.com/stdlib-js/stdlib/pull/2022) _(by stdlib-bot, Philipp Burckhardt)_
-   [`f580092`](https://github.com/stdlib-js/stdlib/commit/f580092a64768060b7a652d0f5cd27da8eefcd7c) - **docs:** update REPL namespace documentation [(#2017)](https://github.com/stdlib-js/stdlib/pull/2017) _(by stdlib-bot, Athan Reines)_
-   [`cb2d15b`](https://github.com/stdlib-js/stdlib/commit/cb2d15b2aa47acfdaa4a80a36b9b8d16da5b301f) - **docs:** update REPL namespace documentation [(#2013)](https://github.com/stdlib-js/stdlib/pull/2013) _(by stdlib-bot, Philipp Burckhardt)_
-   [`1259ab4`](https://github.com/stdlib-js/stdlib/commit/1259ab4070fcabe51b7517a9811d84fbde27648c) - **docs:** update REPL namespace documentation (#2004) [(#2004)](https://github.com/stdlib-js/stdlib/pull/2004) _(by stdlib-bot, Philipp Burckhardt)_
-   [`8a40170`](https://github.com/stdlib-js/stdlib/commit/8a4017086b365af2f3cf7f7e820cd8c3198b6e17) - **docs:** update REPL namespace documentation [(#2002)](https://github.com/stdlib-js/stdlib/pull/2002) _(by stdlib-bot, Athan Reines)_
-   [`7715b47`](https://github.com/stdlib-js/stdlib/commit/7715b47b5ba1ad740e666182e9add45591b5c007) - **docs:** update REPL namespace documentation [(#1986)](https://github.com/stdlib-js/stdlib/pull/1986) _(by stdlib-bot, Athan Reines)_
-   [`9aef63d`](https://github.com/stdlib-js/stdlib/commit/9aef63d5d8d03174109ada6f63a5e5507681b37b) - **docs:** update REPL namespace documentation [(#1985)](https://github.com/stdlib-js/stdlib/pull/1985) _(by stdlib-bot, Athan Reines)_
-   [`0541c04`](https://github.com/stdlib-js/stdlib/commit/0541c04b67a6f81ed20ca969c4024a3f16a4ac1a) - **docs:** update REPL namespace documentation [(#1983)](https://github.com/stdlib-js/stdlib/pull/1983) _(by stdlib-bot, Philipp Burckhardt)_
-   [`fabfd65`](https://github.com/stdlib-js/stdlib/commit/fabfd65a42b0d5404d6bc1353d6aff7ad98e7c51) - **docs:** update REPL namespace documentation [(#1982)](https://github.com/stdlib-js/stdlib/pull/1982) _(by stdlib-bot, Philipp Burckhardt)_
-   [`0b8a3d4`](https://github.com/stdlib-js/stdlib/commit/0b8a3d430c6e84259c66e75fddb5c4fab6684f0f) - **docs:** update REPL namespace documentation [(#1979)](https://github.com/stdlib-js/stdlib/pull/1979) _(by stdlib-bot, Philipp Burckhardt)_
-   [`b9d0c57`](https://github.com/stdlib-js/stdlib/commit/b9d0c57c38d4e8e6c286d3e183068f04ed1d9bee) - **docs:** update REPL namespace documentation [(#1977)](https://github.com/stdlib-js/stdlib/pull/1977) _(by stdlib-bot, Athan Reines)_
-   [`8dc9d13`](https://github.com/stdlib-js/stdlib/commit/8dc9d1324cac3b989198444292e978fb2602d874) - **docs:** update REPL namespace documentation [(#1973)](https://github.com/stdlib-js/stdlib/pull/1973) _(by stdlib-bot, Athan Reines)_
-   [`7945e17`](https://github.com/stdlib-js/stdlib/commit/7945e17778741d41b0159c86d8663d5acaab4208) - **docs:** update REPL namespace documentation [(#1972)](https://github.com/stdlib-js/stdlib/pull/1972) _(by stdlib-bot, Athan Reines)_
-   [`c0993fa`](https://github.com/stdlib-js/stdlib/commit/c0993fab3c31a6a4a2cc2a57f6df7929c9fedb86) - **docs:** update REPL namespace documentation [(#1956)](https://github.com/stdlib-js/stdlib/pull/1956) _(by stdlib-bot, kgryte)_
-   [`7f3f555`](https://github.com/stdlib-js/stdlib/commit/7f3f55526482eb972f1ca9096a58393ba097d5fb) - **docs:** update REPL namespace documentation [(#1928)](https://github.com/stdlib-js/stdlib/pull/1928) _(by stdlib-bot, Planeshifter)_
-   [`d7798af`](https://github.com/stdlib-js/stdlib/commit/d7798af1c843b45d0bbaddadedf7d2961a1b3f57) - **feat:** add `isNonNegativeFinite` to namespace _(by Athan Reines)_
-   [`b5f1824`](https://github.com/stdlib-js/stdlib/commit/b5f18242cfeb0cfea17049db11500d1e8e77dbf2) - **docs:** update REPL namespace documentation [(#1877)](https://github.com/stdlib-js/stdlib/pull/1877) _(by stdlib-bot, Philipp Burckhardt)_
-   [`e65e1fc`](https://github.com/stdlib-js/stdlib/commit/e65e1fcd24305bfd483de0421a411d964e2df84c) - **docs:** update REPL namespace documentation [(#1858)](https://github.com/stdlib-js/stdlib/pull/1858) _(by stdlib-bot, Athan Reines)_
-   [`8282820`](https://github.com/stdlib-js/stdlib/commit/8282820e49c0abfbc46ca1342909d70e5536ed1a) - **docs:** update REPL namespace documentation [(#1843)](https://github.com/stdlib-js/stdlib/pull/1843) _(by stdlib-bot, Philipp Burckhardt)_
-   [`fee1564`](https://github.com/stdlib-js/stdlib/commit/fee15646315816062b06b0b23d35ffb38c102a64) - **docs:** update REPL namespace documentation [(#1817)](https://github.com/stdlib-js/stdlib/pull/1817) _(by stdlib-bot, Athan Reines)_
-   [`8a7e337`](https://github.com/stdlib-js/stdlib/commit/8a7e337dd39120f158416f47190c1e46c3e85b88) - **docs:** update REPL namespace documentation [(#1768)](https://github.com/stdlib-js/stdlib/pull/1768) _(by stdlib-bot, Philipp Burckhardt)_
-   [`272e847`](https://github.com/stdlib-js/stdlib/commit/272e84772e0f5d935b474ad104d55814186ccda8) - **docs:** update REPL namespace documentation [(#1765)](https://github.com/stdlib-js/stdlib/pull/1765) _(by stdlib-bot, Philipp Burckhardt)_
-   [`6cb4de2`](https://github.com/stdlib-js/stdlib/commit/6cb4de2a4320cbb4c2588772e66e52ed4a7c4399) - **docs:** update REPL namespace documentation [(#1737)](https://github.com/stdlib-js/stdlib/pull/1737) _(by stdlib-bot, Planeshifter)_
-   [`13a8841`](https://github.com/stdlib-js/stdlib/commit/13a8841087876a3f66df30255f1ef40256055c95) - **docs:** update REPL namespace documentation [(#1708)](https://github.com/stdlib-js/stdlib/pull/1708) _(by stdlib-bot, Athan Reines)_
-   [`e330815`](https://github.com/stdlib-js/stdlib/commit/e3308159d30e3ff994d1d9ff5b26d7188f3248be) - **docs:** update REPL namespace documentation [(#1699)](https://github.com/stdlib-js/stdlib/pull/1699) _(by stdlib-bot, Philipp Burckhardt)_
-   [`103893f`](https://github.com/stdlib-js/stdlib/commit/103893fee44dcae6b5462bfe27b1cad6727519ec) - **docs:** update REPL namespace documentation [(#1688)](https://github.com/stdlib-js/stdlib/pull/1688) _(by stdlib-bot, Athan Reines)_
-   [`c44cae7`](https://github.com/stdlib-js/stdlib/commit/c44cae79ea509323b6bcd9ab4f627f359b0fb0aa) - **docs:** update REPL namespace documentation [(#1677)](https://github.com/stdlib-js/stdlib/pull/1677) _(by stdlib-bot, Athan Reines)_
-   [`15a1229`](https://github.com/stdlib-js/stdlib/commit/15a1229a26754c5adfa42005e51694e533058a79) - **docs:** update REPL namespace documentation [(#1456)](https://github.com/stdlib-js/stdlib/pull/1456) _(by stdlib-bot, Philipp Burckhardt)_
-   [`504dd47`](https://github.com/stdlib-js/stdlib/commit/504dd4702fe419a5e91868565a7c0accb9a85cc5) - **docs:** update REPL namespace documentation [(#1438)](https://github.com/stdlib-js/stdlib/pull/1438) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a48fab4`](https://github.com/stdlib-js/stdlib/commit/a48fab499cbf3e129513d625a9a09f56ed74e9e0) - **docs:** update REPL namespace documentation [(#1407)](https://github.com/stdlib-js/stdlib/pull/1407) _(by stdlib-bot, Philipp Burckhardt)_
-   [`9d730e8`](https://github.com/stdlib-js/stdlib/commit/9d730e8ea4b1e4655a644f983536a0e1dde3acc2) - **docs:** update REPL namespace documentation (#1390) [(#1390)](https://github.com/stdlib-js/stdlib/pull/1390) _(by stdlib-bot, Philipp Burckhardt)_
-   [`517d2f9`](https://github.com/stdlib-js/stdlib/commit/517d2f9de73dc015e721c75c12dea9a7828f8586) - **docs:** update REPL namespace documentation [(#1382)](https://github.com/stdlib-js/stdlib/pull/1382) _(by stdlib-bot, Athan Reines)_
-   [`dc72590`](https://github.com/stdlib-js/stdlib/commit/dc725901069fa54145c477671bce274d911836b2) - **docs:** update REPL namespace documentation [(#1359)](https://github.com/stdlib-js/stdlib/pull/1359) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2370b7a`](https://github.com/stdlib-js/stdlib/commit/2370b7a641a0d6c4029e2127d6fd2235458b19e3) - **feat:** update REPL namespace [(#1352)](https://github.com/stdlib-js/stdlib/pull/1352) _(by stdlib-bot, Athan Reines)_
-   [`503c398`](https://github.com/stdlib-js/stdlib/commit/503c3988cb7288cf04abe493c08c65d73a63c3d7) - **feat:** add `amskreject` to namespace _(by Athan Reines)_
-   [`04230cb`](https://github.com/stdlib-js/stdlib/commit/04230cb82fa47bd9db6ea4e29ffc3197ece4162a) - **feat:** add `amskfilter` to namespace _(by Athan Reines)_
-   [`3eb2db4`](https://github.com/stdlib-js/stdlib/commit/3eb2db4e846f2345bcb2531f89d55d0db1e14f58) - **feat:** add `ArrayIndex` to namespace _(by Athan Reines)_
-   [`7ee6291`](https://github.com/stdlib-js/stdlib/commit/7ee62912eb404662378afa904f5a712f4a205915) - **feat:** add `atake` to namespace _(by Athan Reines)_
-   [`92abe29`](https://github.com/stdlib-js/stdlib/commit/92abe29dd113ec750b19579f04f781f2a0bb215c) - **feat:** add `array2fancy` to namespace _(by Athan Reines)_
-   [`c1d6282`](https://github.com/stdlib-js/stdlib/commit/c1d628249a148deaf55e5b87493b7cdec6a527b8) - **feat:** add `scalar2array` to namespace _(by Athan Reines)_
-   [`8c4047d`](https://github.com/stdlib-js/stdlib/commit/8c4047dc8b22a290115beb849387bde1e2e181bf) - **feat:** add `arrayMostlySafeCasts` to namespace _(by Athan Reines)_
-   [`840e2b2`](https://github.com/stdlib-js/stdlib/commit/840e2b291bc618149a73fcd3eeb1ec31d79f84a1) - **docs:** update REPL docs _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 6 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Snehil Shah
-   Tudor Pagu
-   Tudor Stefan Pagu
-   kgryte

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-05)

<section class="features">

### Features

-   [`4877282`](https://github.com/stdlib-js/stdlib/commit/4877282c798840743cf64baaddf415260d86270d) - add `random.strided.t` to namespace
-   [`44ac21f`](https://github.com/stdlib-js/stdlib/commit/44ac21f70792d8639928c16bccb3e703185b57e6) - add `random.strided.rayleigh` to namespace
-   [`30aa5ec`](https://github.com/stdlib-js/stdlib/commit/30aa5ec568c8f0bea59fb89e8f53f84eb8b9d5f9) - add `random.strided.poisson` to namespace
-   [`383a569`](https://github.com/stdlib-js/stdlib/commit/383a569842a89f563af54cd10bbf02b93f1ff1f4) - add `random.strided.geometric` to namespace
-   [`a75f17e`](https://github.com/stdlib-js/stdlib/commit/a75f17ed3138f56e48be7063cf49e8dc213cb03b) - add `random.strided.chisquare` to namespace
-   [`91ffbcb`](https://github.com/stdlib-js/stdlib/commit/91ffbcb4e0a110504134d3988dc0755c49bc45b4) - add `random.strided.chi` to namespace
-   [`f6feaf5`](https://github.com/stdlib-js/stdlib/commit/f6feaf56b6598a70476fb6a83e23e1d9fb10dcdb) - add `random.strided.bernoulli` to namespace
-   [`0d3e0b1`](https://github.com/stdlib-js/stdlib/commit/0d3e0b1209e646e8f8f4b20a1a748667d9ff903f) - add `aslice` to namespace
-   [`24736d2`](https://github.com/stdlib-js/stdlib/commit/24736d2f857ec3ab94b035a2dca2d602bb9c08c9) - add `acartesianPower` to namespace
-   [`87ac458`](https://github.com/stdlib-js/stdlib/commit/87ac458d1542b6e91aee23786e50bce6d3e780be) - add `acartesianProduct` and `acartesianSquare` to namespace
-   [`e479c0b`](https://github.com/stdlib-js/stdlib/commit/e479c0bd401ebd5854b98481b3e4a2e7070a3a31) - add `ndat` to namespace
-   [`183264d`](https://github.com/stdlib-js/stdlib/commit/183264ddb5cdf7d888f4c9d2a7ac2ef308b3ad84) - add `isSameArray` to namespace
-   [`8a9967b`](https://github.com/stdlib-js/stdlib/commit/8a9967b427830e5932d137f36f3f98a0b0ef33fc) - add `aoneToLike` to namespace
-   [`01c1a00`](https://github.com/stdlib-js/stdlib/commit/01c1a006cb69b918e6119dde3d2d981b644d3755) - add `azeroToLike` to namespace
-   [`2771f9e`](https://github.com/stdlib-js/stdlib/commit/2771f9ec78932b40f1f002121c7cc737be37475e) - add `aoneTo` to namespace
-   [`74e8faa`](https://github.com/stdlib-js/stdlib/commit/74e8faa7a531123f28b662d5cd1278caaa36f40a) - add `azeroTo` to namespace
-   [`cc219df`](https://github.com/stdlib-js/stdlib/commit/cc219dff09c3f63cbf512799508763cf7739ddd4) - add `isSameComplex64` to namespace
-   [`bda78f8`](https://github.com/stdlib-js/stdlib/commit/bda78f8f1616055a00f24150039ba3325dbb48b0) - add `isSameComplex128` to namespace
-   [`c096551`](https://github.com/stdlib-js/stdlib/commit/c09655109f78750aa2ae9cd6f4c4f0521dc11a08) - add `isSameComplex64Array` to namespace
-   [`722bff4`](https://github.com/stdlib-js/stdlib/commit/722bff40a8aae808ede63fa9cbcaf4e02823e83c) - add `isSameComplex128Array` to namespace
-   [`9042c6f`](https://github.com/stdlib-js/stdlib/commit/9042c6fc997c52ffcca383771cc614fbc7c79d2e) - add `isSameFloat32Array` to namespace
-   [`07979d6`](https://github.com/stdlib-js/stdlib/commit/07979d642df5ec98d4fe4b3c42a640eadd6dfbc1) - add `isSameFloat64Array` to namespace
-   [`20b4078`](https://github.com/stdlib-js/stdlib/commit/20b4078d2e7b17b8e250b5ac4676fe19f2ef16c0) - add `NAN` and `FLOAT32_NAN` to namespace
-   [`8696241`](https://github.com/stdlib-js/stdlib/commit/8696241c724d19f58e4fb2790a4628e5bc059b7e) - add `COMPLEX64_NAN` to namespace
-   [`a97c806`](https://github.com/stdlib-js/stdlib/commit/a97c8063d92e61092af63fbb170fceaf89c06133) - add `COMPLEX128_NAN` to namespace
-   [`cd65542`](https://github.com/stdlib-js/stdlib/commit/cd65542b506ebcd1abbfb4224cba89935195f930) - add `COMPLEX64_ZERO` to namespace
-   [`19b63c2`](https://github.com/stdlib-js/stdlib/commit/19b63c2a1bbd161e8cb14863c00c2cc37454d49b) - add `COMPLEX128_ZERO` to namespace
-   [`8c0f26a`](https://github.com/stdlib-js/stdlib/commit/8c0f26a539ea1cfa786e95eb1d2393352f03277a) - update related packages
-   [`11d5c34`](https://github.com/stdlib-js/stdlib/commit/11d5c34b5dc00f418e9e98032c1084b416873c74) - add `random.array.hypergeometric` to namespace
-   [`e188958`](https://github.com/stdlib-js/stdlib/commit/e18895893d79cdf071907182b78c9b7d8977436c) - add `random.array.frechet` to namespace
-   [`324dfed`](https://github.com/stdlib-js/stdlib/commit/324dfed727b5be34c836897b8bb5ed8f773ec111) - add `random.array.triangular` to namespace
-   [`b92d0bb`](https://github.com/stdlib-js/stdlib/commit/b92d0bbd17035a0baa1ba56edf52358c75aaacd6) - add `random.array.negativeBinomial` to namespace
-   [`bc10bb7`](https://github.com/stdlib-js/stdlib/commit/bc10bb7e02b764b1b05e2304accf2901a908954f) - add `random.array.binomial` to namespace
-   [`d85313a`](https://github.com/stdlib-js/stdlib/commit/d85313a72e5d0d6bbc3a0b10b5edb2ddc70bb592) - add `random.array.kumaraswamy` to namespace
-   [`a6efd1f`](https://github.com/stdlib-js/stdlib/commit/a6efd1f9857282ea96b76821d5051cc64838582d) - add `random.array.pareto1` to namespace
-   [`eee8a07`](https://github.com/stdlib-js/stdlib/commit/eee8a0784b12ae15af87897950bdfd13c18cfc18) - add `random.array.weibull` to namespace
-   [`1da4138`](https://github.com/stdlib-js/stdlib/commit/1da4138858a0297c8912e662103c294481ff60fe) - add `random.array.logistic` to namespace
-   [`ea7442a`](https://github.com/stdlib-js/stdlib/commit/ea7442a7b91eb7350ddc70b87fc02ebcdb48bb7b) - add `random.array.levy`
-   [`c149857`](https://github.com/stdlib-js/stdlib/commit/c14985727dd06ec382708ce78819200fd88fdb7a) - add `random.array.laplace` to namespace
-   [`6c964b9`](https://github.com/stdlib-js/stdlib/commit/6c964b9689d07dd4cfa7a63a8b352ab0e9b13696) - add `random.array.gumbel` to namespace
-   [`fe367da`](https://github.com/stdlib-js/stdlib/commit/fe367da44475b1a758eeec3a1b90b6858f13ba0e) - add `random.array.f` to namespace
-   [`3cdc7dd`](https://github.com/stdlib-js/stdlib/commit/3cdc7dd8afc6a0199b09f99491133e33b1160d6e) - add `random.array.erlang` to namespace
-   [`cd115d4`](https://github.com/stdlib-js/stdlib/commit/cd115d4d5591e115d207541ea744ef8fa3a9acab) - add `random.array.cauchy` to namespace
-   [`3107668`](https://github.com/stdlib-js/stdlib/commit/31076683a4c816d69ebe498f0f2ae7a76bae9192) - add `random.array.t` to namespace
-   [`2ec1499`](https://github.com/stdlib-js/stdlib/commit/2ec1499e0623b2086919fd03dd99a83dffaabf2f) - add `random.array.chisquare` to namespace
-   [`2c8abf3`](https://github.com/stdlib-js/stdlib/commit/2c8abf31b71fb33f80f615da5883e6c6cf142a91) - add `random.array.chi` to namespace
-   [`bfed92a`](https://github.com/stdlib-js/stdlib/commit/bfed92a276b2e55b0e2557e90be83f8801bc83f1) - add `random.array.rayleigh` to namespace
-   [`78c2c91`](https://github.com/stdlib-js/stdlib/commit/78c2c91a3efc2ec79120e034059e5dc732ed9a3c) - add `random.array.geometric` and `random.array.poisson` to namespace
-   [`0cb1c96`](https://github.com/stdlib-js/stdlib/commit/0cb1c9609816ed86207fafdd9e57a30a3e946f8d) - add `random.array.bernoulli` to namespace
-   [`06416f0`](https://github.com/stdlib-js/stdlib/commit/06416f01456f8a99d056d8f3c685f2dbb374db2a) - add `numelDimension` to namespace
-   [`5117239`](https://github.com/stdlib-js/stdlib/commit/5117239a2516565e02d4d1f308a98388b811e088) - add `ndarrayFlag` to namespace
-   [`8aad631`](https://github.com/stdlib-js/stdlib/commit/8aad6312c906b6d805cc80d34a18fe0febc39535) - add `ndarrayFlags` to namespace
-   [`9874a20`](https://github.com/stdlib-js/stdlib/commit/9874a20386302e459cb0f2f3ac974789945792c3) - add `maybeBroadcastArrays` to namespace
-   [`5e1d785`](https://github.com/stdlib-js/stdlib/commit/5e1d7852a61aedd3985994f4fce35be9b0f08d05) - add `broadcastArrays` to namespace
-   [`49e7ac4`](https://github.com/stdlib-js/stdlib/commit/49e7ac4afe1f0153a6a71655515afce59384a928) - update REPL namespace [(#1164)](https://github.com/stdlib-js/stdlib/pull/1164)
-   [`9740fb4`](https://github.com/stdlib-js/stdlib/commit/9740fb4ca8f2ac5acd47909cfa3a69a8a55c81a0) - add `ndsliceFrom` to namespace
-   [`2d253ca`](https://github.com/stdlib-js/stdlib/commit/2d253ca915011cf9065748fa28bfa83896b17239) - add assertion utilities to namespace
-   [`e2d086c`](https://github.com/stdlib-js/stdlib/commit/e2d086cdf202fed9cd61e78489f5e5eaf4ff7eb9) - add `ndarrayStride` to namespace
-   [`bc6cb8e`](https://github.com/stdlib-js/stdlib/commit/bc6cb8e2805b61ef79465a642b2b12c2f86a78f0) - add `ndsliceTo` to namespace
-   [`7746224`](https://github.com/stdlib-js/stdlib/commit/7746224337fae4691bf87ae5d2640f87a4db694f) - add `add4` and `add5` to namespace
-   [`26aef28`](https://github.com/stdlib-js/stdlib/commit/26aef2895b8430b2db15e967df75e2eaebbac145) - add `base.add3` to namespace
-   [`9554641`](https://github.com/stdlib-js/stdlib/commit/9554641325686a4213956c6a9d54428fd86d622f) - add `base.cnegf` to namespace
-   [`4cda914`](https://github.com/stdlib-js/stdlib/commit/4cda91428d831169e321df4729654918e6ca2e02) - add `base.div` and `base.divf` to namespace
-   [`c7f7cba`](https://github.com/stdlib-js/stdlib/commit/c7f7cba52560d5780b5f06692420b1a8efdb3be5) - add `base.factorial2` to namespace

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`4877282`](https://github.com/stdlib-js/stdlib/commit/4877282c798840743cf64baaddf415260d86270d) - **feat:** add `random.strided.t` to namespace _(by Athan Reines)_
-   [`44ac21f`](https://github.com/stdlib-js/stdlib/commit/44ac21f70792d8639928c16bccb3e703185b57e6) - **feat:** add `random.strided.rayleigh` to namespace _(by Athan Reines)_
-   [`30aa5ec`](https://github.com/stdlib-js/stdlib/commit/30aa5ec568c8f0bea59fb89e8f53f84eb8b9d5f9) - **feat:** add `random.strided.poisson` to namespace _(by Athan Reines)_
-   [`383a569`](https://github.com/stdlib-js/stdlib/commit/383a569842a89f563af54cd10bbf02b93f1ff1f4) - **feat:** add `random.strided.geometric` to namespace _(by Athan Reines)_
-   [`a75f17e`](https://github.com/stdlib-js/stdlib/commit/a75f17ed3138f56e48be7063cf49e8dc213cb03b) - **feat:** add `random.strided.chisquare` to namespace _(by Athan Reines)_
-   [`91ffbcb`](https://github.com/stdlib-js/stdlib/commit/91ffbcb4e0a110504134d3988dc0755c49bc45b4) - **feat:** add `random.strided.chi` to namespace _(by Athan Reines)_
-   [`f6feaf5`](https://github.com/stdlib-js/stdlib/commit/f6feaf56b6598a70476fb6a83e23e1d9fb10dcdb) - **feat:** add `random.strided.bernoulli` to namespace _(by Athan Reines)_
-   [`0d3e0b1`](https://github.com/stdlib-js/stdlib/commit/0d3e0b1209e646e8f8f4b20a1a748667d9ff903f) - **feat:** add `aslice` to namespace _(by Athan Reines)_
-   [`24736d2`](https://github.com/stdlib-js/stdlib/commit/24736d2f857ec3ab94b035a2dca2d602bb9c08c9) - **feat:** add `acartesianPower` to namespace _(by Athan Reines)_
-   [`87ac458`](https://github.com/stdlib-js/stdlib/commit/87ac458d1542b6e91aee23786e50bce6d3e780be) - **feat:** add `acartesianProduct` and `acartesianSquare` to namespace _(by Athan Reines)_
-   [`e479c0b`](https://github.com/stdlib-js/stdlib/commit/e479c0bd401ebd5854b98481b3e4a2e7070a3a31) - **feat:** add `ndat` to namespace _(by Athan Reines)_
-   [`183264d`](https://github.com/stdlib-js/stdlib/commit/183264ddb5cdf7d888f4c9d2a7ac2ef308b3ad84) - **feat:** add `isSameArray` to namespace _(by Athan Reines)_
-   [`8a9967b`](https://github.com/stdlib-js/stdlib/commit/8a9967b427830e5932d137f36f3f98a0b0ef33fc) - **feat:** add `aoneToLike` to namespace _(by Athan Reines)_
-   [`01c1a00`](https://github.com/stdlib-js/stdlib/commit/01c1a006cb69b918e6119dde3d2d981b644d3755) - **feat:** add `azeroToLike` to namespace _(by Athan Reines)_
-   [`2771f9e`](https://github.com/stdlib-js/stdlib/commit/2771f9ec78932b40f1f002121c7cc737be37475e) - **feat:** add `aoneTo` to namespace _(by Athan Reines)_
-   [`74e8faa`](https://github.com/stdlib-js/stdlib/commit/74e8faa7a531123f28b662d5cd1278caaa36f40a) - **feat:** add `azeroTo` to namespace _(by Athan Reines)_
-   [`cc219df`](https://github.com/stdlib-js/stdlib/commit/cc219dff09c3f63cbf512799508763cf7739ddd4) - **feat:** add `isSameComplex64` to namespace _(by Athan Reines)_
-   [`bda78f8`](https://github.com/stdlib-js/stdlib/commit/bda78f8f1616055a00f24150039ba3325dbb48b0) - **feat:** add `isSameComplex128` to namespace _(by Athan Reines)_
-   [`c096551`](https://github.com/stdlib-js/stdlib/commit/c09655109f78750aa2ae9cd6f4c4f0521dc11a08) - **feat:** add `isSameComplex64Array` to namespace _(by Athan Reines)_
-   [`722bff4`](https://github.com/stdlib-js/stdlib/commit/722bff40a8aae808ede63fa9cbcaf4e02823e83c) - **feat:** add `isSameComplex128Array` to namespace _(by Athan Reines)_
-   [`9042c6f`](https://github.com/stdlib-js/stdlib/commit/9042c6fc997c52ffcca383771cc614fbc7c79d2e) - **feat:** add `isSameFloat32Array` to namespace _(by Athan Reines)_
-   [`07979d6`](https://github.com/stdlib-js/stdlib/commit/07979d642df5ec98d4fe4b3c42a640eadd6dfbc1) - **feat:** add `isSameFloat64Array` to namespace _(by Athan Reines)_
-   [`20b4078`](https://github.com/stdlib-js/stdlib/commit/20b4078d2e7b17b8e250b5ac4676fe19f2ef16c0) - **feat:** add `NAN` and `FLOAT32_NAN` to namespace _(by Athan Reines)_
-   [`8696241`](https://github.com/stdlib-js/stdlib/commit/8696241c724d19f58e4fb2790a4628e5bc059b7e) - **feat:** add `COMPLEX64_NAN` to namespace _(by Athan Reines)_
-   [`a97c806`](https://github.com/stdlib-js/stdlib/commit/a97c8063d92e61092af63fbb170fceaf89c06133) - **feat:** add `COMPLEX128_NAN` to namespace _(by Athan Reines)_
-   [`cd65542`](https://github.com/stdlib-js/stdlib/commit/cd65542b506ebcd1abbfb4224cba89935195f930) - **feat:** add `COMPLEX64_ZERO` to namespace _(by Athan Reines)_
-   [`19b63c2`](https://github.com/stdlib-js/stdlib/commit/19b63c2a1bbd161e8cb14863c00c2cc37454d49b) - **feat:** add `COMPLEX128_ZERO` to namespace _(by Athan Reines)_
-   [`8c0f26a`](https://github.com/stdlib-js/stdlib/commit/8c0f26a539ea1cfa786e95eb1d2393352f03277a) - **feat:** update related packages _(by Athan Reines)_
-   [`11d5c34`](https://github.com/stdlib-js/stdlib/commit/11d5c34b5dc00f418e9e98032c1084b416873c74) - **feat:** add `random.array.hypergeometric` to namespace _(by Athan Reines)_
-   [`e188958`](https://github.com/stdlib-js/stdlib/commit/e18895893d79cdf071907182b78c9b7d8977436c) - **feat:** add `random.array.frechet` to namespace _(by Athan Reines)_
-   [`324dfed`](https://github.com/stdlib-js/stdlib/commit/324dfed727b5be34c836897b8bb5ed8f773ec111) - **feat:** add `random.array.triangular` to namespace _(by Athan Reines)_
-   [`b92d0bb`](https://github.com/stdlib-js/stdlib/commit/b92d0bbd17035a0baa1ba56edf52358c75aaacd6) - **feat:** add `random.array.negativeBinomial` to namespace _(by Athan Reines)_
-   [`bc10bb7`](https://github.com/stdlib-js/stdlib/commit/bc10bb7e02b764b1b05e2304accf2901a908954f) - **feat:** add `random.array.binomial` to namespace _(by Athan Reines)_
-   [`d85313a`](https://github.com/stdlib-js/stdlib/commit/d85313a72e5d0d6bbc3a0b10b5edb2ddc70bb592) - **feat:** add `random.array.kumaraswamy` to namespace _(by Athan Reines)_
-   [`a6efd1f`](https://github.com/stdlib-js/stdlib/commit/a6efd1f9857282ea96b76821d5051cc64838582d) - **feat:** add `random.array.pareto1` to namespace _(by Athan Reines)_
-   [`eee8a07`](https://github.com/stdlib-js/stdlib/commit/eee8a0784b12ae15af87897950bdfd13c18cfc18) - **feat:** add `random.array.weibull` to namespace _(by Athan Reines)_
-   [`1da4138`](https://github.com/stdlib-js/stdlib/commit/1da4138858a0297c8912e662103c294481ff60fe) - **feat:** add `random.array.logistic` to namespace _(by Athan Reines)_
-   [`ea7442a`](https://github.com/stdlib-js/stdlib/commit/ea7442a7b91eb7350ddc70b87fc02ebcdb48bb7b) - **feat:** add `random.array.levy` _(by Athan Reines)_
-   [`c149857`](https://github.com/stdlib-js/stdlib/commit/c14985727dd06ec382708ce78819200fd88fdb7a) - **feat:** add `random.array.laplace` to namespace _(by Athan Reines)_
-   [`6c964b9`](https://github.com/stdlib-js/stdlib/commit/6c964b9689d07dd4cfa7a63a8b352ab0e9b13696) - **feat:** add `random.array.gumbel` to namespace _(by Athan Reines)_
-   [`fe367da`](https://github.com/stdlib-js/stdlib/commit/fe367da44475b1a758eeec3a1b90b6858f13ba0e) - **feat:** add `random.array.f` to namespace _(by Athan Reines)_
-   [`3cdc7dd`](https://github.com/stdlib-js/stdlib/commit/3cdc7dd8afc6a0199b09f99491133e33b1160d6e) - **feat:** add `random.array.erlang` to namespace _(by Athan Reines)_
-   [`cd115d4`](https://github.com/stdlib-js/stdlib/commit/cd115d4d5591e115d207541ea744ef8fa3a9acab) - **feat:** add `random.array.cauchy` to namespace _(by Athan Reines)_
-   [`3107668`](https://github.com/stdlib-js/stdlib/commit/31076683a4c816d69ebe498f0f2ae7a76bae9192) - **feat:** add `random.array.t` to namespace _(by Athan Reines)_
-   [`2ec1499`](https://github.com/stdlib-js/stdlib/commit/2ec1499e0623b2086919fd03dd99a83dffaabf2f) - **feat:** add `random.array.chisquare` to namespace _(by Athan Reines)_
-   [`2c8abf3`](https://github.com/stdlib-js/stdlib/commit/2c8abf31b71fb33f80f615da5883e6c6cf142a91) - **feat:** add `random.array.chi` to namespace _(by Athan Reines)_
-   [`bfed92a`](https://github.com/stdlib-js/stdlib/commit/bfed92a276b2e55b0e2557e90be83f8801bc83f1) - **feat:** add `random.array.rayleigh` to namespace _(by Athan Reines)_
-   [`78c2c91`](https://github.com/stdlib-js/stdlib/commit/78c2c91a3efc2ec79120e034059e5dc732ed9a3c) - **feat:** add `random.array.geometric` and `random.array.poisson` to namespace _(by Athan Reines)_
-   [`0cb1c96`](https://github.com/stdlib-js/stdlib/commit/0cb1c9609816ed86207fafdd9e57a30a3e946f8d) - **feat:** add `random.array.bernoulli` to namespace _(by Athan Reines)_
-   [`06416f0`](https://github.com/stdlib-js/stdlib/commit/06416f01456f8a99d056d8f3c685f2dbb374db2a) - **feat:** add `numelDimension` to namespace _(by Athan Reines)_
-   [`5117239`](https://github.com/stdlib-js/stdlib/commit/5117239a2516565e02d4d1f308a98388b811e088) - **feat:** add `ndarrayFlag` to namespace _(by Athan Reines)_
-   [`8aad631`](https://github.com/stdlib-js/stdlib/commit/8aad6312c906b6d805cc80d34a18fe0febc39535) - **feat:** add `ndarrayFlags` to namespace _(by Athan Reines)_
-   [`9874a20`](https://github.com/stdlib-js/stdlib/commit/9874a20386302e459cb0f2f3ac974789945792c3) - **feat:** add `maybeBroadcastArrays` to namespace _(by Athan Reines)_
-   [`5e1d785`](https://github.com/stdlib-js/stdlib/commit/5e1d7852a61aedd3985994f4fce35be9b0f08d05) - **feat:** add `broadcastArrays` to namespace _(by Athan Reines)_
-   [`fff6152`](https://github.com/stdlib-js/stdlib/commit/fff61520f6023c0ac8ada8b8d66bec2c40481bee) - **docs:** update contributor list [(#1174)](https://github.com/stdlib-js/stdlib/pull/1174) _(by stdlib-bot, Athan Reines)_
-   [`49e7ac4`](https://github.com/stdlib-js/stdlib/commit/49e7ac4afe1f0153a6a71655515afce59384a928) - **feat:** update REPL namespace [(#1164)](https://github.com/stdlib-js/stdlib/pull/1164) _(by stdlib-bot, Philipp Burckhardt)_
-   [`9740fb4`](https://github.com/stdlib-js/stdlib/commit/9740fb4ca8f2ac5acd47909cfa3a69a8a55c81a0) - **feat:** add `ndsliceFrom` to namespace _(by Athan Reines)_
-   [`2d253ca`](https://github.com/stdlib-js/stdlib/commit/2d253ca915011cf9065748fa28bfa83896b17239) - **feat:** add assertion utilities to namespace _(by Athan Reines)_
-   [`e2d086c`](https://github.com/stdlib-js/stdlib/commit/e2d086cdf202fed9cd61e78489f5e5eaf4ff7eb9) - **feat:** add `ndarrayStride` to namespace _(by Athan Reines)_
-   [`bc6cb8e`](https://github.com/stdlib-js/stdlib/commit/bc6cb8e2805b61ef79465a642b2b12c2f86a78f0) - **feat:** add `ndsliceTo` to namespace _(by Athan Reines)_
-   [`7746224`](https://github.com/stdlib-js/stdlib/commit/7746224337fae4691bf87ae5d2640f87a4db694f) - **feat:** add `add4` and `add5` to namespace _(by Athan Reines)_
-   [`26aef28`](https://github.com/stdlib-js/stdlib/commit/26aef2895b8430b2db15e967df75e2eaebbac145) - **feat:** add `base.add3` to namespace _(by Athan Reines)_
-   [`9554641`](https://github.com/stdlib-js/stdlib/commit/9554641325686a4213956c6a9d54428fd86d622f) - **feat:** add `base.cnegf` to namespace _(by Athan Reines)_
-   [`4cda914`](https://github.com/stdlib-js/stdlib/commit/4cda91428d831169e321df4729654918e6ca2e02) - **feat:** add `base.div` and `base.divf` to namespace _(by Athan Reines)_
-   [`c7f7cba`](https://github.com/stdlib-js/stdlib/commit/c7f7cba52560d5780b5f06692420b1a8efdb3be5) - **feat:** add `base.factorial2` to namespace _(by Athan Reines)_
-   [`c0ccd8a`](https://github.com/stdlib-js/stdlib/commit/c0ccd8a6108431a4923fde7fad85ec823690b953) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`0946ad3`](https://github.com/stdlib-js/stdlib/commit/0946ad3fe7cfed65323b960a0722d50ac993ba64) - **docs:** update REPL docs _(by Athan Reines)_
-   [`a49bb3d`](https://github.com/stdlib-js/stdlib/commit/a49bb3d59e055b9ce2d393132673b5d901977f75) - **docs:** update REPL docs _(by Athan Reines)_
-   [`661c948`](https://github.com/stdlib-js/stdlib/commit/661c94838aed2deccca4fbc58077512919964fff) - **docs:** update links _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-11-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-11-08)

<section class="features">

### Features

-   [`d4f4054`](https://github.com/stdlib-js/stdlib/commit/d4f4054514d38adf19e568db4ac1fa1fa82d4cfc) - add `nditerMatrixEntries` to namespace
-   [`6753c94`](https://github.com/stdlib-js/stdlib/commit/6753c94def0125d72a8ee715e5ca3d47e898d7ea) - add `nditerColumnEntries` to namespace
-   [`0fc7b65`](https://github.com/stdlib-js/stdlib/commit/0fc7b650371ec13b355367702468d531c0eb4fac) - add `nditerRowEntries` to namespace
-   [`9fa9570`](https://github.com/stdlib-js/stdlib/commit/9fa95704a6340b2c822ade35e652a8138f413c92) - add `nditerMatrices` to namespace
-   [`aba8c1a`](https://github.com/stdlib-js/stdlib/commit/aba8c1aba168610dd84ce6081ab4cb49b7e53d6f) - add `ndsliceDimensionFrom` to namespace
-   [`6fda483`](https://github.com/stdlib-js/stdlib/commit/6fda483c94a65235ad0e8f2136a7d79d5321877c) - add `ndsliceDimensionTo` to namespace
-   [`2b304a0`](https://github.com/stdlib-js/stdlib/commit/2b304a0bc830744c7136458643a2dcc39e9f914c) - add `ndarrayMostlySafeCasts` to namespace
-   [`110bfb3`](https://github.com/stdlib-js/stdlib/commit/110bfb3860cdaf719e4fc66bd666a1aa039144ca) - add `ndsliceDimension` to namespace
-   [`7b6b703`](https://github.com/stdlib-js/stdlib/commit/7b6b703b25243c719eb6889b4ab98ae94d5c0f5a) - add `ndarrayDataBuffer` to namespace
-   [`4227c05`](https://github.com/stdlib-js/stdlib/commit/4227c05d4937087fcd516631b752a28a49ab0621) - add `ndarrayOrder` to namespace and rename aliases
-   [`c709f38`](https://github.com/stdlib-js/stdlib/commit/c709f38ccff4a04ac822cd6b2e50796eedda19ba) - add `ndarrayDataType` to namespace
-   [`895a173`](https://github.com/stdlib-js/stdlib/commit/895a17381026cd3ae0a4ad174a20a1ace921d371) - add `ndstrides` to namespace
-   [`3a44e7e`](https://github.com/stdlib-js/stdlib/commit/3a44e7ebb576af7c0e301c6144f9be1d38ef2b8e) - add `ndshape` to namespace
-   [`d4c08ee`](https://github.com/stdlib-js/stdlib/commit/d4c08ee5a117122d55659673cddbff7700dc7e1d) - add `ndims` to namespace
-   [`7ac268b`](https://github.com/stdlib-js/stdlib/commit/7ac268b4abd82075b329f16ba991d0d36524fe12) - add `numel` to namespace
-   [`c8af478`](https://github.com/stdlib-js/stdlib/commit/c8af478451bc77398bada48450f65406ba460504) - add `maybeBroadcastArray` to namespace
-   [`34b1f69`](https://github.com/stdlib-js/stdlib/commit/34b1f69b901244fb6031b62807c15f2b57aad033) - add `nditerValues` to namespace
-   [`fccaeba`](https://github.com/stdlib-js/stdlib/commit/fccaeba2348add1ffec64c5dd85b9bae0a42d96f) - add `nditerEntries` to namespace
-   [`4968a1a`](https://github.com/stdlib-js/stdlib/commit/4968a1a5acdcc4cae29a5dad9b528e8e45a0788e) - add `nditerIndices` to namespace
-   [`24d4d1c`](https://github.com/stdlib-js/stdlib/commit/24d4d1c19bc76d83670bc29dee067194ad44eaf8) - add `broadcastArray` to namespace
-   [`518c4a6`](https://github.com/stdlib-js/stdlib/commit/518c4a6ba9d2eca11da52af52ffdce9589aabffc) - add `nditer2arrayEach` to namespace
-   [`de48915`](https://github.com/stdlib-js/stdlib/commit/de48915ef4b974ad254ed2f823a38974dd1feedc) - add `nditerRows` and `nditerColumns` to namespace
-   [`b9dfb43`](https://github.com/stdlib-js/stdlib/commit/b9dfb43ca2556094a9abce4005f0952ed49d9245) - add `ndsliceAssign` to namespace
-   [`626a722`](https://github.com/stdlib-js/stdlib/commit/626a72285a5ee6a1528fa7f8d8268aafaf25f2a1) - add `ndslice` to namespace
-   [`015c2d9`](https://github.com/stdlib-js/stdlib/commit/015c2d96d24591391526d19cf80b3e0356a923b7) - add `FancyArray` to namespace
-   [`2eed6f3`](https://github.com/stdlib-js/stdlib/commit/2eed6f357a036f7df7ffdf9e06871a27d346bf78) - add `seq2slice` to namespace
-   [`9d16b25`](https://github.com/stdlib-js/stdlib/commit/9d16b250cbee0b3fedf90b2c89a39a5d5fa02378) - add `isMultiSlice` to namespace
-   [`794d9a7`](https://github.com/stdlib-js/stdlib/commit/794d9a7dcedc51b547ee8a7ba30d3207afc6d015) - add `MultiSlice` to namespace
-   [`a68770b`](https://github.com/stdlib-js/stdlib/commit/a68770b91ac6d12ff5725a7452b72f18b8f894c7) - add `Slice` and `isSlice` to namespace
-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version
-   [`34b78a0`](https://github.com/stdlib-js/stdlib/commit/34b78a009d1138e99e29362ed92df4da6cbd55d9) - add `headercase` to namespace
-   [`775c156`](https://github.com/stdlib-js/stdlib/commit/775c15690ed781b367c3a5b53af2701163c068d8) - add `base.forEachChar` to namespace
-   [`a972d67`](https://github.com/stdlib-js/stdlib/commit/a972d672c273b615e4007e31a15994f5d75a9813) - add `base.forEachCodePoint` to namespace
-   [`98ef4c5`](https://github.com/stdlib-js/stdlib/commit/98ef4c5c608719eaa4276c284788fce09b0d4ba0) - add `base.forEachGraphemeCluster` to namespace
-   [`000b507`](https://github.com/stdlib-js/stdlib/commit/000b5070d98a064bdb002d92e268dcf9d7e5d822) - add `forEachChar` to namespace
-   [`7caad0b`](https://github.com/stdlib-js/stdlib/commit/7caad0b8dfcc91e0bd7d744b3a492bf237671766) - add string utilities to namespace
-   [`87620ba`](https://github.com/stdlib-js/stdlib/commit/87620ba2960b991ec82cac1c06b88260615f791e) - add `dotcase` to namespace
-   [`8c05c4e`](https://github.com/stdlib-js/stdlib/commit/8c05c4e8b268fe642b4c40dd2bcaf3dd75898a49) - add `aemptyLike` to namespace
-   [`15cde7c`](https://github.com/stdlib-js/stdlib/commit/15cde7c85f6228cd553af316f7e012ad1ea57273) - update REPL namespace (#1020) [(#1020)](https://github.com/stdlib-js/stdlib/pull/1020)
-   [`334d7df`](https://github.com/stdlib-js/stdlib/commit/334d7df7d97173a3f3dd892e6c901384ae99b038) - add `ndemptyLike` to namespace
-   [`309afe9`](https://github.com/stdlib-js/stdlib/commit/309afe98c1a0b10e1a48ad2c3f6cfdddef84c6d0) - add `ndempty` to namespace
-   [`279b85c`](https://github.com/stdlib-js/stdlib/commit/279b85cf2cb6c2ef6099baeb00905e86e3030819) - add `aempty` to namespace
-   [`a625e10`](https://github.com/stdlib-js/stdlib/commit/a625e1079e3725d7572c23b88c70b504bb17f538) - add `ndarray2array` to namespace
-   [`462cd43`](https://github.com/stdlib-js/stdlib/commit/462cd438bd5aecb87010717901b77b64f15e64e7) - update REPL namespace [(#952)](https://github.com/stdlib-js/stdlib/pull/952)
-   [`f53f8ca`](https://github.com/stdlib-js/stdlib/commit/f53f8ca2da067cdad98191ec2ad4ee41747c3a36) - update namespace
-   [`ad6ce88`](https://github.com/stdlib-js/stdlib/commit/ad6ce8861c649c575c5ba8090cd4ce4e7372149b) - update namespace
-   [`7477ab8`](https://github.com/stdlib-js/stdlib/commit/7477ab893b38045b8a603ad120f04c7d5d925ccb) - update namespace
-   [`bf08114`](https://github.com/stdlib-js/stdlib/commit/bf08114c2712c22d767de42c41704f6374ad8129) - update REPL namespace [(#925)](https://github.com/stdlib-js/stdlib/pull/925)
-   [`23c8c4f`](https://github.com/stdlib-js/stdlib/commit/23c8c4f6e15948c544476097291dd0656f71780e) - update namespace
-   [`1dd8c2c`](https://github.com/stdlib-js/stdlib/commit/1dd8c2cb9c9c4f8dc847c90a2c4f417cd540a1d3) - update namespace
-   [`7de77db`](https://github.com/stdlib-js/stdlib/commit/7de77dbc53ae3c7c475ba834e2060ab2132025a1) - update namespace
-   [`ce67626`](https://github.com/stdlib-js/stdlib/commit/ce67626b99ae18df2bab0fcf559dc918fbb5ed3b) - update REPL namespace [(#920)](https://github.com/stdlib-js/stdlib/pull/920)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)
-   [`c300118`](https://github.com/stdlib-js/stdlib/commit/c3001189267fe1b3a75a3721e6a0dad612ff64d6) - rename to avoid duplicate variable name

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`d4f4054`](https://github.com/stdlib-js/stdlib/commit/d4f4054514d38adf19e568db4ac1fa1fa82d4cfc) - **feat:** add `nditerMatrixEntries` to namespace _(by Athan Reines)_
-   [`6753c94`](https://github.com/stdlib-js/stdlib/commit/6753c94def0125d72a8ee715e5ca3d47e898d7ea) - **feat:** add `nditerColumnEntries` to namespace _(by Athan Reines)_
-   [`0fc7b65`](https://github.com/stdlib-js/stdlib/commit/0fc7b650371ec13b355367702468d531c0eb4fac) - **feat:** add `nditerRowEntries` to namespace _(by Athan Reines)_
-   [`9fa9570`](https://github.com/stdlib-js/stdlib/commit/9fa95704a6340b2c822ade35e652a8138f413c92) - **feat:** add `nditerMatrices` to namespace _(by Athan Reines)_
-   [`b8b0fbe`](https://github.com/stdlib-js/stdlib/commit/b8b0fbe146dea5b38b2742bb70b195273b10fbb1) - **docs:** update REPL namespace [(#1123)](https://github.com/stdlib-js/stdlib/pull/1123) _(by stdlib-bot, Athan Reines)_
-   [`aba8c1a`](https://github.com/stdlib-js/stdlib/commit/aba8c1aba168610dd84ce6081ab4cb49b7e53d6f) - **feat:** add `ndsliceDimensionFrom` to namespace _(by Athan Reines)_
-   [`6fda483`](https://github.com/stdlib-js/stdlib/commit/6fda483c94a65235ad0e8f2136a7d79d5321877c) - **feat:** add `ndsliceDimensionTo` to namespace _(by Athan Reines)_
-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - **fix:** make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2b304a0`](https://github.com/stdlib-js/stdlib/commit/2b304a0bc830744c7136458643a2dcc39e9f914c) - **feat:** add `ndarrayMostlySafeCasts` to namespace _(by Athan Reines)_
-   [`110bfb3`](https://github.com/stdlib-js/stdlib/commit/110bfb3860cdaf719e4fc66bd666a1aa039144ca) - **feat:** add `ndsliceDimension` to namespace _(by Athan Reines)_
-   [`7b6b703`](https://github.com/stdlib-js/stdlib/commit/7b6b703b25243c719eb6889b4ab98ae94d5c0f5a) - **feat:** add `ndarrayDataBuffer` to namespace _(by Athan Reines)_
-   [`4227c05`](https://github.com/stdlib-js/stdlib/commit/4227c05d4937087fcd516631b752a28a49ab0621) - **feat:** add `ndarrayOrder` to namespace and rename aliases _(by Athan Reines)_
-   [`c709f38`](https://github.com/stdlib-js/stdlib/commit/c709f38ccff4a04ac822cd6b2e50796eedda19ba) - **feat:** add `ndarrayDataType` to namespace _(by Athan Reines)_
-   [`895a173`](https://github.com/stdlib-js/stdlib/commit/895a17381026cd3ae0a4ad174a20a1ace921d371) - **feat:** add `ndstrides` to namespace _(by Athan Reines)_
-   [`3a44e7e`](https://github.com/stdlib-js/stdlib/commit/3a44e7ebb576af7c0e301c6144f9be1d38ef2b8e) - **feat:** add `ndshape` to namespace _(by Athan Reines)_
-   [`d4c08ee`](https://github.com/stdlib-js/stdlib/commit/d4c08ee5a117122d55659673cddbff7700dc7e1d) - **feat:** add `ndims` to namespace _(by Athan Reines)_
-   [`7ac268b`](https://github.com/stdlib-js/stdlib/commit/7ac268b4abd82075b329f16ba991d0d36524fe12) - **feat:** add `numel` to namespace _(by Athan Reines)_
-   [`c8af478`](https://github.com/stdlib-js/stdlib/commit/c8af478451bc77398bada48450f65406ba460504) - **feat:** add `maybeBroadcastArray` to namespace _(by Athan Reines)_
-   [`34b1f69`](https://github.com/stdlib-js/stdlib/commit/34b1f69b901244fb6031b62807c15f2b57aad033) - **feat:** add `nditerValues` to namespace _(by Athan Reines)_
-   [`fccaeba`](https://github.com/stdlib-js/stdlib/commit/fccaeba2348add1ffec64c5dd85b9bae0a42d96f) - **feat:** add `nditerEntries` to namespace _(by Athan Reines)_
-   [`4968a1a`](https://github.com/stdlib-js/stdlib/commit/4968a1a5acdcc4cae29a5dad9b528e8e45a0788e) - **feat:** add `nditerIndices` to namespace _(by Athan Reines)_
-   [`24d4d1c`](https://github.com/stdlib-js/stdlib/commit/24d4d1c19bc76d83670bc29dee067194ad44eaf8) - **feat:** add `broadcastArray` to namespace _(by Athan Reines)_
-   [`518c4a6`](https://github.com/stdlib-js/stdlib/commit/518c4a6ba9d2eca11da52af52ffdce9589aabffc) - **feat:** add `nditer2arrayEach` to namespace _(by Athan Reines)_
-   [`de48915`](https://github.com/stdlib-js/stdlib/commit/de48915ef4b974ad254ed2f823a38974dd1feedc) - **feat:** add `nditerRows` and `nditerColumns` to namespace _(by Athan Reines)_
-   [`b9dfb43`](https://github.com/stdlib-js/stdlib/commit/b9dfb43ca2556094a9abce4005f0952ed49d9245) - **feat:** add `ndsliceAssign` to namespace _(by Athan Reines)_
-   [`626a722`](https://github.com/stdlib-js/stdlib/commit/626a72285a5ee6a1528fa7f8d8268aafaf25f2a1) - **feat:** add `ndslice` to namespace _(by Athan Reines)_
-   [`7f160b3`](https://github.com/stdlib-js/stdlib/commit/7f160b39ce35b7f3cc519477f50453bf55d565fa) - **docs:** update REPL namespace [(#1104)](https://github.com/stdlib-js/stdlib/pull/1104) _(by stdlib-bot, Athan Reines)_
-   [`acea23e`](https://github.com/stdlib-js/stdlib/commit/acea23e5bac0490854ae35ad9d919b6136ad5434) - **docs:** update REPL namespace [(#1101)](https://github.com/stdlib-js/stdlib/pull/1101) _(by stdlib-bot, Athan Reines)_
-   [`015c2d9`](https://github.com/stdlib-js/stdlib/commit/015c2d96d24591391526d19cf80b3e0356a923b7) - **feat:** add `FancyArray` to namespace _(by Athan Reines)_
-   [`2eed6f3`](https://github.com/stdlib-js/stdlib/commit/2eed6f357a036f7df7ffdf9e06871a27d346bf78) - **feat:** add `seq2slice` to namespace _(by Athan Reines)_
-   [`9d16b25`](https://github.com/stdlib-js/stdlib/commit/9d16b250cbee0b3fedf90b2c89a39a5d5fa02378) - **feat:** add `isMultiSlice` to namespace _(by Athan Reines)_
-   [`794d9a7`](https://github.com/stdlib-js/stdlib/commit/794d9a7dcedc51b547ee8a7ba30d3207afc6d015) - **feat:** add `MultiSlice` to namespace _(by Athan Reines)_
-   [`a68770b`](https://github.com/stdlib-js/stdlib/commit/a68770b91ac6d12ff5725a7452b72f18b8f894c7) - **feat:** add `Slice` and `isSlice` to namespace _(by Athan Reines)_
-   [`4f044cf`](https://github.com/stdlib-js/stdlib/commit/4f044cfcf111ab06e198db186cb0be3a6291b1e8) - **docs:** update REPL namespace docs [(#1090)](https://github.com/stdlib-js/stdlib/pull/1090) _(by stdlib-bot, Athan Reines)_
-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`a9e7f23`](https://github.com/stdlib-js/stdlib/commit/a9e7f2335c377476698c7bbad59a799cf13e8ff3) - **docs:** update REPL namespace [(#1077)](https://github.com/stdlib-js/stdlib/pull/1077) _(by stdlib-bot, Athan Reines)_
-   [`c300118`](https://github.com/stdlib-js/stdlib/commit/c3001189267fe1b3a75a3721e6a0dad612ff64d6) - **fix:** rename to avoid duplicate variable name _(by Philipp Burckhardt)_
-   [`ab5d324`](https://github.com/stdlib-js/stdlib/commit/ab5d324b547870938b21ebdeecc1f7fda132f321) - **chore:** resolve lint errors _(by Philipp Burckhardt)_
-   [`b449faa`](https://github.com/stdlib-js/stdlib/commit/b449faa002be77cf4c495a8a5c05e8f0ac437b7f) - **docs:** update REPL namespace docs [(#1069)](https://github.com/stdlib-js/stdlib/pull/1069) _(by stdlib-bot, Athan Reines)_
-   [`34b78a0`](https://github.com/stdlib-js/stdlib/commit/34b78a009d1138e99e29362ed92df4da6cbd55d9) - **feat:** add `headercase` to namespace _(by Athan Reines)_
-   [`775c156`](https://github.com/stdlib-js/stdlib/commit/775c15690ed781b367c3a5b53af2701163c068d8) - **feat:** add `base.forEachChar` to namespace _(by Athan Reines)_
-   [`a972d67`](https://github.com/stdlib-js/stdlib/commit/a972d672c273b615e4007e31a15994f5d75a9813) - **feat:** add `base.forEachCodePoint` to namespace _(by Athan Reines)_
-   [`98ef4c5`](https://github.com/stdlib-js/stdlib/commit/98ef4c5c608719eaa4276c284788fce09b0d4ba0) - **feat:** add `base.forEachGraphemeCluster` to namespace _(by Athan Reines)_
-   [`000b507`](https://github.com/stdlib-js/stdlib/commit/000b5070d98a064bdb002d92e268dcf9d7e5d822) - **feat:** add `forEachChar` to namespace _(by Athan Reines)_
-   [`7caad0b`](https://github.com/stdlib-js/stdlib/commit/7caad0b8dfcc91e0bd7d744b3a492bf237671766) - **feat:** add string utilities to namespace _(by Athan Reines)_
-   [`87d19fc`](https://github.com/stdlib-js/stdlib/commit/87d19fccc86b7266c688a2dcd740982ee91a921a) - **docs:** update REPL namespace docs [(#1049)](https://github.com/stdlib-js/stdlib/pull/1049) _(by stdlib-bot, Athan Reines)_
-   [`87620ba`](https://github.com/stdlib-js/stdlib/commit/87620ba2960b991ec82cac1c06b88260615f791e) - **feat:** add `dotcase` to namespace _(by Athan Reines)_
-   [`8c05c4e`](https://github.com/stdlib-js/stdlib/commit/8c05c4e8b268fe642b4c40dd2bcaf3dd75898a49) - **feat:** add `aemptyLike` to namespace _(by Athan Reines)_
-   [`7444ac5`](https://github.com/stdlib-js/stdlib/commit/7444ac518cfb6ade1fea7c1170a68f0c31edd984) - **docs:** update REPL namespace [(#1040)](https://github.com/stdlib-js/stdlib/pull/1040) _(by stdlib-bot, Planeshifter)_
-   [`f637078`](https://github.com/stdlib-js/stdlib/commit/f6370784160c2f1ceaec9a839d9f25a2faae17e5) - **docs:** update REPL namespace [(#1025)](https://github.com/stdlib-js/stdlib/pull/1025) _(by stdlib-bot, Athan Reines)_
-   [`15cde7c`](https://github.com/stdlib-js/stdlib/commit/15cde7c85f6228cd553af316f7e012ad1ea57273) - **feat:** update REPL namespace (#1020) [(#1020)](https://github.com/stdlib-js/stdlib/pull/1020) _(by stdlib-bot, Philipp Burckhardt)_
-   [`c211d3b`](https://github.com/stdlib-js/stdlib/commit/c211d3b69fddbfa9160c59115e8e58b92364fa24) - **docs:** update REPL namespace [(#999)](https://github.com/stdlib-js/stdlib/pull/999) _(by stdlib-bot, Athan Reines)_
-   [`d22c7ad`](https://github.com/stdlib-js/stdlib/commit/d22c7ad5ef0a389961fcf34e85bd2d82049d3e11) - **docs:** update REPL namespace [(#994)](https://github.com/stdlib-js/stdlib/pull/994) _(by stdlib-bot, Athan Reines)_
-   [`334d7df`](https://github.com/stdlib-js/stdlib/commit/334d7df7d97173a3f3dd892e6c901384ae99b038) - **feat:** add `ndemptyLike` to namespace _(by Athan Reines)_
-   [`309afe9`](https://github.com/stdlib-js/stdlib/commit/309afe98c1a0b10e1a48ad2c3f6cfdddef84c6d0) - **feat:** add `ndempty` to namespace _(by Athan Reines)_
-   [`279b85c`](https://github.com/stdlib-js/stdlib/commit/279b85cf2cb6c2ef6099baeb00905e86e3030819) - **feat:** add `aempty` to namespace _(by Athan Reines)_
-   [`02a3539`](https://github.com/stdlib-js/stdlib/commit/02a3539534fdec1ef6bc1ba4c59189b88439306f) - **docs:** update REPL namespace [(#979)](https://github.com/stdlib-js/stdlib/pull/979) _(by stdlib-bot, Athan Reines)_
-   [`a625e10`](https://github.com/stdlib-js/stdlib/commit/a625e1079e3725d7572c23b88c70b504bb17f538) - **feat:** add `ndarray2array` to namespace _(by Athan Reines)_
-   [`9cdb3e1`](https://github.com/stdlib-js/stdlib/commit/9cdb3e1a51f2774958f912a94c5035feb2169216) - **docs:** update REPL namespace [(#963)](https://github.com/stdlib-js/stdlib/pull/963) _(by stdlib-bot, Athan Reines)_
-   [`7770e27`](https://github.com/stdlib-js/stdlib/commit/7770e27b4e082319f3706e1209c5b813a522a0eb) - **docs:** update REPL namespace [(#961)](https://github.com/stdlib-js/stdlib/pull/961) _(by stdlib-bot, Athan Reines)_
-   [`5c4c206`](https://github.com/stdlib-js/stdlib/commit/5c4c2069037ba58505676e92c1cc8df2d8fe043e) - **docs:** update REPL namespace [(#959)](https://github.com/stdlib-js/stdlib/pull/959) _(by stdlib-bot, Athan Reines)_
-   [`d79ba96`](https://github.com/stdlib-js/stdlib/commit/d79ba96d299e0534b700da3e3b78c1670c81e4b8) - **docs:** update REPL namespace [(#955)](https://github.com/stdlib-js/stdlib/pull/955) _(by stdlib-bot, Athan Reines)_
-   [`462cd43`](https://github.com/stdlib-js/stdlib/commit/462cd438bd5aecb87010717901b77b64f15e64e7) - **feat:** update REPL namespace [(#952)](https://github.com/stdlib-js/stdlib/pull/952) _(by stdlib-bot, Athan Reines)_
-   [`f53f8ca`](https://github.com/stdlib-js/stdlib/commit/f53f8ca2da067cdad98191ec2ad4ee41747c3a36) - **feat:** update namespace _(by Athan Reines)_
-   [`ad6ce88`](https://github.com/stdlib-js/stdlib/commit/ad6ce8861c649c575c5ba8090cd4ce4e7372149b) - **feat:** update namespace _(by Athan Reines)_
-   [`7477ab8`](https://github.com/stdlib-js/stdlib/commit/7477ab893b38045b8a603ad120f04c7d5d925ccb) - **feat:** update namespace _(by Athan Reines)_
-   [`bf08114`](https://github.com/stdlib-js/stdlib/commit/bf08114c2712c22d767de42c41704f6374ad8129) - **feat:** update REPL namespace [(#925)](https://github.com/stdlib-js/stdlib/pull/925) _(by stdlib-bot, Athan Reines)_
-   [`23c8c4f`](https://github.com/stdlib-js/stdlib/commit/23c8c4f6e15948c544476097291dd0656f71780e) - **feat:** update namespace _(by Athan Reines)_
-   [`1dd8c2c`](https://github.com/stdlib-js/stdlib/commit/1dd8c2cb9c9c4f8dc847c90a2c4f417cd540a1d3) - **feat:** update namespace _(by Athan Reines)_
-   [`7de77db`](https://github.com/stdlib-js/stdlib/commit/7de77dbc53ae3c7c475ba834e2060ab2132025a1) - **feat:** update namespace _(by Athan Reines)_
-   [`ce67626`](https://github.com/stdlib-js/stdlib/commit/ce67626b99ae18df2bab0fcf559dc918fbb5ed3b) - **feat:** update REPL namespace [(#920)](https://github.com/stdlib-js/stdlib/pull/920) _(by stdlib-bot, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Planeshifter

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.11">

## 0.0.11 (2021-08-23)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2021-07-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-06-13)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

