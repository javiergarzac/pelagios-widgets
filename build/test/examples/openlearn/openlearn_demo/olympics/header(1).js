function showcontent(content){document.getElementById(content).style.display="block"}function popupinfo(url,windowName,windowFeatures){popupclose(),newwindow=window.open(url,windowName,windowFeatures),newwindow.focus()}function popupclose(){newwindow!=null&&(newwindow.closed||newwindow.close())}function getElementsByClassName2(classname,node){node||(node=document.getElementsByTagName("body")[0]);var a=[],re=new RegExp("\\b"+classname+"\\b"),els=node.getElementsByTagName("*");for(var i=0,j=els.length;i<j;i++)re.test(els[i].className)&&a.push(els[i]);return a}function hide_rights_info(){nodes=getElementsByClassName2("rightsinfo_nohide",!1);for(var i in nodes)nodes[i].className="rightsinfo_hide";nodes=getElementsByClassName2("rightsinfo_nojs",!1);for(var i in nodes)nodes[i].className="rightsinfo"}function showhide_source_ref(node){rightsnode=!1,c=0;while(testnode=node.nextSibling){c++;if(testnode.className=="rightsinfo_hide"||testnode.className=="rightsinfo_nohide"){rightsnode=testnode;break}node=testnode;if(c>100)break}rightsnode&&(rightsnode.className=="rightsinfo_nohide"?rightsnode.className="rightsinfo_hide":rightsnode.className="rightsinfo_nohide")}function openNewWindow(a){return window.open(a,"_blank"),!1}var newwindow