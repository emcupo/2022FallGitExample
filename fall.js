var storyContent = ﻿{"inkVersion":20,"root":[["^Once upon a time...","\n",["ev",{"^->":"0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^There were two choices.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^There were four lines of content.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-2","flg":18},{"s":["^There was also a tree. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.2.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.3.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-0"},{"#f":5}],"c-2":["ev",{"^->":"0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":"0.4.s"},[{"#n":"$r2"}],{"->":"tree"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"tree":[["^There is a tree.","\n","ev",{"VAR?":"hiTree"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: images/tree.jpg"},{"->":"tree.0.8"},null]}],"nop","\n","ev",{"VAR?":"hiTree"},"/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: images/cartoontree.png"},"^\"Hello.\"","\n",{"->":"tree.0.14"},null]}],"nop","\n","ev",{"VAR?":"hiAmount"},10,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^\"Shut up!","\n",{"->":"tree.0.22"},null]}],"nop","\n",["ev",{"^->":"tree.0.24.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Say hi to the tree. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"tree.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.24.s"},[{"#n":"$r2"}],{"->":"hiTreeRoom"},"\n",{"#f":5}]}],{"#f":1}],"hiTreeRoom":["ev",true,"/ev",{"VAR=":"hiTree","re":true},"ev",{"VAR?":"hiAmount"},1,"+",{"VAR=":"hiAmount","re":true},"/ev",{"->":"tree"},{"#f":1}],"StoryEnd":["end",{"#f":1}],"global decl":["ev",false,{"VAR=":"hiTree"},0,{"VAR=":"hiAmount"},"/ev","end",null],"#f":1}],"listDefs":{}};