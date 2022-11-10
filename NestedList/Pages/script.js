async function loadpage() {
    var data =
        [
            {


                "id": "1",
                "name": "google",
                "url": "www.google.com",
                "subData": [
                    {
                        "id": "2",
                        "name": "walla",
                        "url": "www.walla.co.il"
                    },
                    {
                        "id": "3",
                        "name": "ynet",
                        "url": "www.ynet.co.il",
                        "subData": [
                            {
                                "id": "4",
                                "name": "mako",
                                "url": "www.mako.co.il"
                            },
                            {
                                "id": "5",
                                "name": "google",
                                "url": "www.google.com"
                            },
                            {
                                "id": "6",
                                "name": "walla",
                                "url": "www.walla.co.il"
                            }
                        ]
                    },
                    {
                        "id": "7",
                        "name": "google",
                        "url": "www.google.com"
                    }
                ]
            },
            {
                "id": "8",
                "name": "ynet",
                "url": "www.ynet.co.il",
                "subData": [
                    {
                        "id": "9",
                        "name": "walla",
                        "url": "www.walla.co.il"
                    }
                ]
            },
            {
                "id": "10",
                "name": "google",
                "url": "www.google.com",
                "subData": [
                    {
                        "id": "11",
                        "name": "ynet",
                        "url": "www.ynet.co.il",
                        "subData": [
                            {
                                "id": "12",
                                "name": "walla",
                                "url": "www.walla.co.il"
                            },
                            {
                                "id": "13",
                                "name": "google",
                                "url": "www.google.com"
                            },
                            {
                                "id": "14",
                                "name": "mako",
                                "url": "www.mako.co.il"
                            }
                        ]
                    },
                    {
                        "id": "15",
                        "name": "google",
                        "url": "www.google.com"
                    },
                    {
                        "id": "16",
                        "name": "mako",
                        "url": "www.mako.co.il"
                    }
                ]
            },
            {
                "id": "17",
                "name": "walla",
                "url": "www.walla.co.il",
                "subData": [
                    {
                        "id": "18",
                        "name": "ynet",
                        "url": "www.ynet.co.il"
                    },
                    {
                        "id": "19",
                        "name": "google",
                        "url": "www.google.com"
                    },
                    {
                        "id": "20",
                        "name": "walla",
                        "url": "www.walla.co.il",
                        "subData": [
                            {
                                "id": "183",
                                "name": "ynet",
                                "url": "www.ynet.co.il"
                            },
                            {
                                "id": "193",
                                "name": "google",
                                "url": "www.google.com"
                            },
                            {
                                "id": "203",
                                "name": "walla",
                                "url": "www.walla.co.il"
                            }]
                    }
                ]
            },
            {
                "id": "21",
                "name": "mako",
                "url": "www.mako.co.il"
            }
        ]

    buildHtml(data);
}
async function getJSON() {
    const response = await fetch("json.json");
    const json = await response.json();
    return json;
}
function buildHtml(data) {
    var wrapperDiv = document.createElement("div");
    wrapperDiv.id = "mainDiv";
    
    data.forEach((item) => {
        wrapperDiv.appendChild( buildInnerDivReq(item,0));
    })
    //var str = "";
    document.body.appendChild(wrapperDiv)

}

function buildInnerDivReq(item,level) {
    var item, div, innerDiv;

    div = document.createElement("div");

    div.innerText = `id: ${item.id}`;
    div.className = 'level'+level;

    if (item.subData) {
        item.subData.forEach((innerItem) => {
            var innerDiv = buildInnerDivReq(innerItem, level+1);
            div.appendChild(innerDiv);
        });
    }
    return div;
    //document.getElementById("mainDiv").appendChild(div);
    //buildInnerDivReq(item, index);



    //myDiv.style.border = "1px,solid,green";

    //myDiv.innerHTML += sData[x].id + "<br/>"
    //myDiv.innerHTML += sData[x].name + "<br/>"
    //myDiv.innerHTML += sData[x].url + "<br/>"

    //wrapperDiv += myDiv;

    //var subData = sData[x].subData;
    //if (subData != undefined) {
    //    var Div = document.createElement("div")
    //    //Div.style.border = "1px,solid,red";
    //    var div = func2(subData)

    //    myDiv.appendChild(bigDiv)

    //}

}