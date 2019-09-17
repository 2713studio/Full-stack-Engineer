## 数组操作是否改变原数组


    // 自动播放声音
    const xhr = new XMLHttpRequest(); // 通过XHR下载音频文件
    const context = new AudioContext();
    let source = null;
    xhr.open('GET', '/assets/imgs/phone/bgm.mp4', true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function (e) { // 下载完成
      // console.log(e.target['response']);
      const arrayBuffer = e.target['response'];
      context.decodeAudioData(arrayBuffer, function (buffer) {
        // 解码成功时的回调函数
        source = context.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        source.connect(context.destination);
        source.start(0); // 立即播放
      }, function (err) { // 解码出错时的回调函数
        console.log('Error decoding file', err);
      });
    };
    xhr.send();