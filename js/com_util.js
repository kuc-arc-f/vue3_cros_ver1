//
//console.log('#util')
var exStorage = {
    load: function (key) {
        var dat = JSON.parse(localStorage.getItem(key) || '[]')
        console.log( 'dat.len='+ dat.length )    
        return dat
    },
    save: function (key, message) {
      localStorage.setItem( key, JSON.stringify(message))
    },
    remove: function (key) {
      localStorage.removeItem( key );
    },
  }
var sysConst= {
    STORAGE_KEY_pageId : 'strage_key_page_id',
    STORAGE_KEY_flash  : 'strage_key_flash',
    STORAGE_KEY_userId : 'strage_key_user_id',
}