var n1=0
        var op='+'
        function b1()
        {
            document.getElementById("t1").value=document.getElementById("t1").value+1
        }
        function b2()
        {
            document.getElementById("t1").value=document.getElementById("t1").value+2
        }
        function b3()
        {
            document.getElementById("t1").value=document.getElementById("t1").value+3
        }
        function b4()
        {
            document.getElementById("t1").value=document.getElementById("t1").value+4
        }
        function b5()
        {
            document.getElementById("t1").value=document.getElementById("t1").value+5
        }
        function b6()
        {
            document.getElementById("t1").value=document.getElementById("t1").value+6
        }
        function b7()
        {
            document.getElementById("t1").value=document.getElementById("t1").value+7
        }
        function b8()
        {
            document.getElementById("t1").value=document.getElementById("t1").value+8
        }
        function b9()
        {
            document.getElementById("t1").value=document.getElementById("t1").value+9
        }
        function b0()
        {
            document.getElementById("t1").value=document.getElementById("t1").value+0
        }
        function b00()
        {
            document.getElementById("t1").value=document.getElementById("t1").value+"00"
        }
        
        function bAC()
        {
            document.getElementById("t1").value=document.getElementById("t1").value=""
        }
        function bDEL()
        {
            var n1=document.getElementById("t1").value
            var n2=n1.slice(0,-1)
            document.getElementById("t1").value=n2
        }
        
        function bdot()
        {
            document.getElementById("t1").value=document.getElementById("t1").value+"."
        }
        function bper()
        {
            var n1=document.getElementById("t1").value
            var n2=Number(n1)/100
            document.getElementById("t1").value=n2
        }
        function badd()
        {
            n1=document.getElementById("t1").value
            document.getElementById("t1").value=""
            op="+"
        }
        function bsub()
        {
            n1=document.getElementById("t1").value
            document.getElementById("t1").value=""
            op="-"
        }
        function bmul()
        {
            n1=document.getElementById("t1").value
            document.getElementById("t1").value=""
            op="*"
        }
        function bdvd()
        {
            n1=document.getElementById("t1").value
            document.getElementById("t1").value=""
            op="/"
        }
        function bequl(){
            if(op=="+"){
            var n2=document.getElementById("t1").value
            var n3=Number(n1)+Number(n2)
            document.getElementById("t1").value=n3}
            if(op=="-"){
            var n2=document.getElementById("t1").value
            var n3=Number(n1)-Number(n2)
            document.getElementById("t1").value=n3}
            if(op=="*"){
            var n2=document.getElementById("t1").value
            var n3=Number(n1)*Number(n2)
            document.getElementById("t1").value=n3}
            if(op=="/"){
            var n2=document.getElementById("t1").value
            var n3=Number(n1)/Number(n2)
            document.getElementById("t1").value=n3}
            
        }