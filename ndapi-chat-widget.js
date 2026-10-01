// NDAPI Chat Widget — add this file to your Mintlify project as a custom script
(function() {
  // Floating button
  var btn = document.createElement('div')
  btn.innerHTML = '💬'
  btn.title = 'Ask NDAPI Assistant'
  btn.style.cssText = 'position:fixed;bottom:28px;right:28px;width:54px;height:54px;background:#1565C0;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;cursor:pointer;box-shadow:0 4px 20px rgba(21,101,192,.5);z-index:9999;transition:transform .2s'
  btn.onmouseenter = function() { btn.style.transform = 'scale(1.1)' }
  btn.onmouseleave = function() { btn.style.transform = 'scale(1)' }

  // Iframe popup
  var popup = document.createElement('div')
  popup.style.cssText = 'position:fixed;bottom:96px;right:28px;width:380px;height:560px;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.4);z-index:9998;display:none;border:1px solid rgba(255,255,255,.1)'
  var iframe = document.createElement('iframe')
  iframe.src = 'https://ndapi-chat.nolubz.com'
  iframe.style.cssText = 'width:100%;height:100%;border:none'
  popup.appendChild(iframe)

  var open = false
  btn.onclick = function() {
    open = !open
    popup.style.display = open ? 'block' : 'none'
    btn.innerHTML = open ? '✕' : '💬'
  }

  document.body.appendChild(popup)
  document.body.appendChild(btn)
})()
