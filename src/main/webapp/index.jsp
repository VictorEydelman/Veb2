<%@ page import="Units.Data" %>
<%@ page import="Units.Dataone" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<html lang="ru">
<head>

    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
<header>
    Эйдельман Виктор Аркадьевич, группа P3214, вариант № 2474
</header>
<div id="imgt">
    <div class="img" id="img">
        <svg id="svg" height="400" width="400" xmlns="http://www.w3.org/2000/svg">
            <line stroke="black" x1="20" x2="260" y1="140" y2="140"></line>
            <line stroke="black" x1="140" x2="140" y1="20" y2="260"></line>
            <polygon fill="black" points="140,20 134,35 146,35" stroke="black"></polygon>
            <polygon fill="black" points="260,140 245,146 245,134" stroke="black"></polygon>

            <line stroke="black" x1="180" x2="180" y1="145" y2="135"></line>
            <line stroke="black" x1="220" x2="220" y1="145" y2="135"></line>
            <line stroke="black" x1="60" x2="60" y1="145" y2="135"></line>
            <line stroke="black" x1="100" x2="100" y1="145" y2="135"></line>
            <line stroke="black" x1="135" x2="145" y1="100" y2="100"></line>
            <line stroke="black" x1="135" x2="145" y1="60" y2="60"></line>
            <line stroke="black" x1="135" x2="145" y1="220" y2="220"></line>
            <line stroke="black" x1="135" x2="145" y1="180" y2="180"></line>

            <polygon fill="blue"
                     fill-opacity="0.7"
                     stroke="blue"
                     points="140,140 220,140 220,180 140,180"></polygon>
            <polygon fill="blue"
                     fill-opacity="0.7"
                     stroke="blue"
                     points="140,140 140,100 60,140"></polygon>
            <path fill="blue"
                  fill-opacity="0.7"
                  stroke="blue"
                  d="M 140 140 L 140 100 A 40,40 0 0,1 180,140 Z"></path>

            <text fill="black" x="170" y="130">R/2</text>
            <text fill="black" x="215" y="130">R</text>
            <text fill="black" x="50" y="130">-R</text>
            <text fill="black" x="85" y="130">-R/2</text>
            <text fill="black" x="110" y="180">-R/2</text>
            <text fill="black" x="120" y="220">-R</text>
            <text fill="black" x="120" y="60">R</text>
            <text fill="black" x="110" y="100">R/2</text>
            <text fill="black" x="245" y="130">X</text>
            <text fill="black" x="150" y="35">Y</text>
            <% Data m= (Data) request.getServletContext().getAttribute("entries");
                if(m!=null){%>
            <%for (Dataone entry : m.getData()) {
                if(entry.isResult().equals("Входит")){%>
                    <circle id="point" r="4" cx=<%=140+(entry.getX()/entry.getR()*80)%> cy=<%=140-(entry.getY()/entry.getR()*80)%> fill="green" stroke="white"></circle>
                <%}else{%>
                <circle id="point" r="4" cx=<%=140+(entry.getX()/entry.getR()*80)%> cy=<%=140-(entry.getY()/entry.getR()*80)%> fill="red" stroke="white"></circle>
                <%}
            }}%>
        </svg>
    </div>
</div>
<div class="container" id="con">
    <form name="php" method="post" class="php" id="php" >
        <div class="prov1" id="xblock">
            <h3 style="margin-bottom: 3%">Выберите X:</h3>
            <div>
                <input type="button" class="messageCheckbox" name="x" id="x1" value="-2">
                <input type="button" class="messageCheckbox" name="x" id="x2" value="-1.5">
                <input type="button" class="messageCheckbox" name="x" id="x3" value="-1">
            </div>
            <div>
                <input type="button" class="messageCheckbox" name="x" id="x4" value="-0.5">
                <input type="button" class="messageCheckbox" name="x" id="x5" value="0">
                <input type="button" class="messageCheckbox" name="x" id="x6" value="0.5">
            </div>
            <div>
                <input type="button" class="messageCheckbox" name="x" id="x7" value="1">
                <input type="button" class="messageCheckbox" name="x" id="x8" value="1.5">
                <input type="button" class="messageCheckbox" name="x" id="x9" value="2">
            </div>
        </div>

        <div class="prov1" id="yblock">
            <h3>Выберите Y:</h3>
            <input  maxlength="16" type="text" id="Y" size="10" name="y" placeholder=" от -5 до 3">
        </div>

        <div class="prov1" id="rblock">
            <h3>Выберите R:</h3>
            <input  maxlength="16" type="text" id="R" size="10" name="r" placeholder=" от 2 до 5">
        </div>

        <input type="hidden" name="time" id="time">
        <p><button style="margin-top: 3%" type="submit" onclick="on()" id="submit" value="Отправить">Отправить</button> </p>
    </form>
</div>
<div id="frame" class="contain">
    <h2>Окно результата</h2>
    <table class="table-check">
        <tr class="table-header">
            <th scope="col">X</th>
            <th scope="col">Y</th>
            <th scope="col">R</th>
            <th scope="col">Текущее время</th>
            <th scope="col">Результат попадания</th>
        </tr>
        <%if(m!=null){%>
            <%for (Dataone entry : m.getData()) {%>
                <tr class="table-row">
                    <td><%=entry.getX()%></td>
                    <td><%=entry.getY()%></td>
                    <td><%=entry.getR()%></td>
                    <td><%=entry.getQueryTime()%></td>
                    <td><%=entry.isResult()%></td>
                </tr>
            <%}
        }%>
    </table>
</div>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="index.js" defer></script>
</body>
</html>