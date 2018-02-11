**整数**

	[0-9]+

![](https://user-gold-cdn.xitu.io/2016/11/29/35e3fb7c39a688479e848b5aec97f448)

**逗号分隔的整数**

	\b[0-9]{1,3}(,[0-9]{3})*\b

![](https://user-gold-cdn.xitu.io/2016/11/29/f433fbe54358b58b299ee4e003996639)

**浮点数**

	(\+?(\d+|\.\d+|\d+\.\d+)|-?(\d+|\d+\.\d+))

![](https://user-gold-cdn.xitu.io/2016/11/29/58556504439a7e54fe544d0e949ce46e)

**0-255之间的数字**

	^([0-9]|[0-9]{2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])$

![](https://user-gold-cdn.xitu.io/2016/11/30/bb22d2bcda341b942953839416c26b8f.png)

**身份证**

	^[1-9]\d{14}(\d{2}[0-9x])?$

![](https://user-gold-cdn.xitu.io/2016/11/29/4184686d7a24d9a8131c78808ec5e467.png)

**邮箱**

	^[-\w.]{0,64}@([a-zA-Z0-9]{1,63}\.)*[-a-zA-Z0-9]{1,63}$

![](https://user-gold-cdn.xitu.io/2016/11/29/688ac16a53264be9c655481b18881495.png)

**固定电话**

	(\(?0[1-9]{2,3}\)?-?)?[1-9][0-9]\{6,7}(-[0-9]{1,6})?

![](https://user-gold-cdn.xitu.io/2016/11/29/a1bdc6730df3ec6c58923696e570dd0f)

**邮编**

	[1-9][0-9]{5}

![](https://user-gold-cdn.xitu.io/2016/11/29/946784e2f39b270dd494a5b7beb3ad82)

**ISBN**

	((ISBN(-13)?:?\s)?97[89][-\s]?[0-9][-\s]?[0-9]{3}[-\s]?[0-9]{5}[-\s]?[0-9]|(ISBN(-10)?:?\s)?[0-9][-\s]?[0-9]{3}[-\s]?[0-9]{5}[-\s]?[0-9x])

![](https://user-gold-cdn.xitu.io/2016/11/29/6fdbf52177793db442b2b22b710de076)


**手机号**

	(0|\+86)?(13[0-9]|15[0-356]|18[025-9])\d{8}

![](https://user-gold-cdn.xitu.io/2016/11/29/04a0a307efd5aa2dd000af19328baab6.png)

**成对的html tag 如test**

	<([^>]+)>[\s\S]*?<\ \1="">

![](https://user-gold-cdn.xitu.io/2016/11/29/247c91dc35b5a46dbb68b75cf74f185c.png)

**a**

	([^<]+)<\ a="">

![](https://user-gold-cdn.xitu.io/2016/11/30/0f65ff80691d6e656907b35a2cb5fbc7.png)

	([^>]+)<\ head="">

![](https://user-gold-cdn.xitu.io/2016/11/29/ce9be595a7298ea1136844e32f9a0783.png)

**图片**

	]*?src=['"]?([^"']+)["']?[^>]*>

![](https://user-gold-cdn.xitu.io/2016/11/29/93831abcfba274503e4a791fd0c5b621.png)

**附：正则指引思维导图**

![](https://user-gold-cdn.xitu.io/2016/11/29/84e948199c6dc228b2b2949204ac4b6a.png)