/* 搜索提示 */
function checksearch(the)
 {
	if ($.trim(the.key.value) == '')
	 {
		alert('请输入关键字');
		the.key.focus();
		the.key.value = '';
		return false
	}
	if ($.trim(the.key.value) == '请输入关键字')
	 {
		alert('请输入关键字');
		the.key.focus();
		the.key.value = '';
		return false
	}
}