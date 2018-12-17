## 上传文件

重新生成上传文件按钮

  // 点击上传

	  upload_info(e: any): void {
	    let me = this;
	    let element = e.parentNode;
	    me.contentIsShow = false;
	    me.fileIsShow = false;
	    var fileInput = element.querySelector('input.input-file[type=file]');
	    if (fileInput == null) {
	      fileInput = document.createElement('input');
	      fileInput.setAttribute('type', 'file');
	      fileInput.classList.add('input-file');
	      fileInput.style.display = 'none';
	      fileInput.addEventListener('change', function () {
	        if (fileInput.files != null && fileInput.files[0] != null) {
	          // 如果有选择文件
	          const data = fileInput.files[0];
	          const filename = data.name;
	          const filetype = (filename.split('.')[filename.split('.').length - 1]).toLowerCase();
	          if (me.flieNama !== '') {
	            // 如有文件不能上传
	          } else if (data.size > 52428800 * 20) {
	            me.fileErrorText = '大小不符，最大支持1G';
	            me.fileIsShow = true;
	          } else if (data.size > me.picLimit && filetype !== 'mp4' && filetype !== 'avi') {
	            me.fileErrorText = '大小不符，最大支持100M';
	            me.fileIsShow = true;
	          } else if (!me.GLB.wkZiliao.test(data.name)) {
	            me.fileErrorText = '格式不符，仅支持doc,docx，ppt,pptx，xls，xlsx，wps，pdf，dwg，mp4，avi，jpg，jpeg，png格式';
	            me.fileIsShow = true;
	          } else {
	            me.flieNama = data.name;
	            // 上传文件API
	            const param = new FormData();
	            param.append('files', data);
	            param.append('account', sessionStorage.getItem('account'));
	            const rsl = me.wenku.uploadFile(param);
	            rsl.subscribe(event => {
	              switch (event.type) {
	                case HttpEventType.Sent:
	                  // 显示文件详细信息
	                  me.uploadSuccess = true;
	                  fileInput.value = '';
	                  return;
	                case HttpEventType.UploadProgress:
	                  // Compute and show the % done:
	                  const percentDone = Math.round(100 * event.loaded / event.total);
	                  me.uploadPercent = (percentDone * 0.9).toFixed(0) + '%';
	                  return;
	                case HttpEventType.Response:
	                  if (event.body['result'] === 1) {
	                    me.fileUrl = event.body['path'];
	                    me.format = event.body['format'];
	                    me.sizes = event.body['sizes'];
	                    me.uploadPercent = '100%';
	                  } else {
	                    me.uploadSuccess = false;
	                    me.uploadPercent = '上传失败';
	                    me.uploadSuccess = false;
	                  }
	                  return;
	                default:
	                  return;
	              }
	            }, error => {
	              me.uploadPercent = '上传失败';
	              me.uploadSuccess = false;
	            });
	          }
	        }
	        //  else {
	        //   me.fileErrorText = '您未上传资料';
	        //   me.fileIsShow = true;
	        // }
	      });
	      element.appendChild(fileInput);
	    }
	    fileInput.click();
	  }