xmlns="http://www.w3.org/2000/svg";
xlink="http://www.w3.org/1999/xlink"; 

//Wrapper to hold possible elements to draw
var ScoreElement = {
    GClef: 0,
    TimeSig44: 1
};

//Function to draw score Lines
function DrawScoreLines(length) {
    var scoreLines = document.createElementNS(xmlns, "path");
    scoreLines.setAttribute("d","M 0, 0 " + length + ", 0 M 0, 15 " + length + ", 15 M 0, 30 " + length + ", 30 M 0, 45 " + length + ", 45 M 0, 60 " + length + ", 60");
    scoreLines.setAttribute("stroke", "#000");
    return scoreLines;   
}

//function to get the score lines path
function GetScoreLinesPath(length) {
    return "M 0, 0 " + length + ", 0 M 0, 15 " + length + ", 15 M 0, 30 " + length + ", 30 M 0, 45 " + length + ", 45 M 0, 60 " + length + ", 60";
}
                
//Function to draw general score lines elements
function DrawScoreLinesElement(scoreElement) {
    var sElem;  //var to store line the score element draw
    
    switch(scoreElement) {
        
        case ScoreElement.GClef:
            sElem = document.createElementNS(xmlns, "path");  //create new path
            sElem.setAttribute("d","M7.124-20.882C7.871-13.221,2.175-7.019-2.868-2.008c-2.29,2.2-0.38,0.364-1.577,1.458 c-0.251-1.175-0.733-4.244-0.687-5.172c0.318-6.604,5.685-16.146,10.387-19.665C6.011-23.975,6.634-23.86,7.124-20.882z M8.721,18.682C5.7,16.46,1.735,15.875-1.902,16.51c-0.469-3.076-0.938-6.151-1.407-9.225C2.452,1.578,8.718-5.048,9.046-13.642 c0.144-5.471-0.678-11.45-4.114-15.892c-4.167,0.315-7.106,5.284-9.317,8.375C-8.033-14.616-7.181-6.658-5.781,0.398 c-1.983,2.334-4.729,4.272-6.685,6.702c-5.775,5.656-10.807,13.308-9.815,21.758c0.45,8.171,6.347,15.771,14.387,17.714 c3.054,0.771,6.285,0.848,9.373,0.242c0.538,5.515,2.515,11.344,0.228,16.698c-1.719,3.916-6.833,7.362-10.62,5.371 c-1.47-0.773-0.278-0.125-1.171-0.618c2.621-0.629,4.9-2.538,5.539-3.834c2.054-3.589-0.979-8.919-5.282-8.23 c-5.543,0.112-7.819,7.695-4.253,11.481c3.301,3.727,9.394,3.216,13.307,0.78c4.442-2.893,5-8.686,4.492-13.631 c-0.172-1.664-0.988-6.546-1.089-8.303c1.709-0.61,0.512-0.144,2.925-1.102c6.517-2.58,10.676-10.438,8.808-17.452 C13.581,24.373,11.803,20.832,8.721,18.682z M10.094,32.789c0.524,4.879-2.58,10.59-7.546,12.157 c-0.333-1.947-0.421-2.479-0.644-3.616C0.722,35.301,0.08,29.109-0.832,22.996c3.983-0.412,8.475,1.331,9.861,5.352 C9.625,29.763,9.869,31.282,10.094,32.789z M-2.524,45.524c-6.235,0.347-12.254-3.908-13.81-10.002 c-1.835-5.275-1.295-11.349,2.013-15.941c2.733-4.171,6.388-7.608,9.873-11.134C-4,11.209-3.551,13.97-3.103,16.736 c-7.329,1.917-12.266,11.581-7.879,18.261c1.304,1.875,4.844,5.45,6.778,4.007c-2.702-1.675-4.909-4.557-4.435-7.91 c-0.201-3.142,3.358-7.135,6.499-7.838c1.075,7.031,2.307,14.885,3.382,21.919C0.002,45.417-1.262,45.524-2.524,45.524z"); //draw in the created path the G clef symbol
            break;
            
        case ScoreElement.TimeSig44:
            sElem = document.createElementNS(xmlns, "path");  //create new path
            sElem.setAttribute("d","M6.891,32 l9.176,0.053c0,0-5.978,9.233-13.003,15.76c-0.053,0,7.708,0.053,7.708,0.053l0.052-5.041l5.873-5.677 l 0.262,11.036l2.991-0.017l-0.002,1.715l-3.015-0.013l0.013,2.903c0,0,0.499,2.124,3.041,2.163c0,0.052,0.013,3.012,0.013,3.012L7.625,58l0.052-3.184c0,0,3.172,0.796,3.159-4.908c0-0.001-10.749-0.013-10.749-0.013L0,48.511C0,48.511,7.232,41.422,6.891,32zM6.891,2 l9.176,0.053c0,0-5.978,9.233-13.003,15.76c-0.053,0,7.708,0.053,7.708,0.053l0.053-5.041l5.873-5.677l0.262,11.036l2.991-0.017l-0.003,1.715l-3.015-0.013l0.013,2.903c0,0,0.499,2.124,3.041,2.163c0,0.052,0.014,3.012,0.014,3.012L7.625,28l0.053-3.184c0,0,3.172,0.796,3.159-4.908c0-0.001-10.749-0.013-10.749-0.013L0,18.511C0,18.511,7.232,11.422,6.891,2z"); //draw in the created path the G clef symbol
            break;
            
        default:
            return null; 
    }
    
    sElem.setAttribute("class", "scoreElement");
    return sElem;
}


function DrawNote(denominator) {
    var mElem = document.createElementNS(xmlns, "path"),  //var to store the measure element draw
        path;
    
    if(denominator < 2)
        path = "M6.168,14.077C2.72,13.017,0,10.133,0,7.539C0,0.198,15.768-2.707,22.279,3.434C29.321,10.075,17.83,17.667,6.168,14.077z M16.686,12.234c1.918-2.928,0.084-8.729-3.238-10.243c-4.88-2.223-7.871,1.565-5.839,7.396C9.014,13.419,14.733,15.213,16.686,12.234z"
    else if(denominator < 4)
        path = "M17.486,3.148c1.469,3.373-1.164,8.055-5.881,10.455c-4.715,2.401-9.729,1.615-11.199-1.76C-1.061,8.473,1.572,3.791,6.287,1.391c3.925-1.998,8.175-1.826,10.306,0.414 M3.581,12.276c2.597,0,5.219-1.139,7.865-3.414c2.694-2.275,4.042-3.968,4.042-5.081c0-0.709-0.293-1.063-0.883-1.063c-1.812,0-4.313,1.088-7.496,3.263C3.973,8.104,2.406,9.874,2.406,11.29C2.406,11.948,2.797,12.276,3.581,12.276"
    else
        path = "M17.486,3.155c1.469,3.373-1.165,8.054-5.881,10.455c-4.716,2.4-9.73,1.613-11.199-1.76C-1.062,8.478,1.571,3.797,6.287,1.397c3.924-1.998,8.174-1.828,10.306,0.414";

    mElem.setAttribute("d", path);
    return mElem;  
}

function DrawNoteFlag(denominator) {
    var mElem = document.createElementNS(xmlns, "path"),  //var to store the measure element draw
        path = "";

    switch(denominator) {
        case 8:
            path = "M0,2.912v45.669l0,0V16.315c19.935,5.05,10.735,22.556,8.94,28.739C25.317,22.686,0.221,13.562,0,0l0,0V2.912z";
            break;

        case 16:
            path = "M0.002,5.295v45.975V23.55c11.844,7.235,18.269,9.305,12.298,25.644C23.705,31.765,9.484,29.475,0.002,12.376v-1.299c16.056,8.143,12.834,15.762,14.275,19.941C18.271,14.282,3.935,12.59,0,0.718V0L0.002,5.295z";
            break;

        case 32:
            path = "M0.117,0v54.249V31.982c11.705,7.726,17.459,9.21,11.5,25.518c5.85-7.556,5.428-12.431,2.362-17.482c0.458-3.398,0.481-6.002,0.174-8.093C17.505,12.538,5.685,14.203,0.117,2.013V0.117H0M0.511,11.287c11.755,6.344,12.836,12.563,13.145,17.347c-2.277-5.295-7.747-6.909-13.145-15.701V11.287z M0.511,20.813c11.915,10.14,11.869,7.747,13.3,18.296C10.558,34.195,5.027,28.956,0.511,20.813z";
            break;

        case 64:
            path = "M0.039-2v47c5.132,4.149,10.288,5.792,12.339,8.736c4.046,5.806,0.109,15.833-0.328,17.361c1.176-1.512,3.526-5.63,3.487-10.547c-0.023-2.949,0.007-8.999-6.763-14.786C2.004,39.977,0,37.079,0,31.619c5.001,4.664,14.618,7.484,13.544,20.459c0.365,0.769,0.622,1.436,0.622,1.436c1.409-4.467,1.061-11.412-2.214-15.78c-3.276-4.368-7.329-6.323-9.719-9.609c-1.747-2.402-2.113-3.681-2.222-7.394c4.914,3.276,10.309,7.158,11.504,9.468c2.635,5.093,2.435,8.775,2.216,10.741c0.642,1.502,0.513,1.893,0.513,1.893s0.675-2.23,0.675-5.288c0-3.057,0.09-6.036-3.076-11.168C8.676,21.245,2.9,18.789,1.469,15.786c-1.092-2.293-1.364-3.058-1.42-6.115c5.023,3.058,7.535,4.368,10.046,7.862c2.512,3.494,3.662,4.461,3.565,12.205c0.546,1.201,0.476,1.553,0.476,1.553s0.969-4.536,0.681-8.172c-0.244-3.065-1.445-6.351-4.284-9.735C7.694,9.999,3.629,6.623,1.579,4.321c-1.355-1.522-1.475-2.397-1.49-3.46";
            break;
    }

    mElem.setAttribute("d", path);
    return mElem; 
}

function DrawRest(denominator) {
    var mElem = document.createElementNS(xmlns, "path"),  //var to store the measure element draw
        path;
    
    if(denominator < 2)
        path = "M0,15,16,15,16,20,0,20z";
    else if(denominator < 4)
        path = "M0,25,16,25,16,30,0,30z";
    else if(denominator < 8)
        path = "M3.549,6.793l9.656,13.197c-9.077,10.346-3.569,14.607-1.321,20.587L1.426,25.355c6.047-7.147,3.625-12.657,1.47-18.208C2.895,7.145,3.548,6.797,3.549,6.793zM11.053,38.878c-11.13-9.971-15.403,3.024-4.436,12.364C5.206,48.82,1.133,36.925,11.598,40.55";
    else if(denominator < 16)
        path = "M8.243,20.609l-0.154,0.694c0.309,0.668,0.822,0.821,1.541,0.463c2.465-1.132,4.263-2.878,5.393-5.24h1.002L8.705,43.338H6.548l5.933-21.033c-2.106,1.337-4.34,2.107-6.703,2.312c-1.541-0.051-2.876-0.538-4.006-1.465C0.694,22.228,0.103,21.021,0,19.531c0.052-2.466,1.31-4.006,3.775-4.623c1.283-0.205,2.388,0.104,3.313,0.924c0.925,0.823,1.412,1.901,1.463,3.236L8.243,20.609";
    else if(denominator < 32)
        path = "M5.859,23.107c-1.116-0.911-1.698-2.104-1.75-3.574c0-2.436,1.243-3.983,3.728-4.642c1.218-0.202,2.283,0.127,3.196,0.989c0.913,0.812,1.395,1.878,1.446,3.195l-0.305,1.599l-0.152,0.685c0.305,0.608,0.812,0.737,1.522,0.379c2.384-1.063,4.235-2.787,5.554-5.172h1.141L8.675,58.033H6.544l5.783-20.771c-2.029,1.317-4.211,2.08-6.544,2.283c-1.521-0.052-2.841-0.535-3.956-1.447C0.711,37.186,0.102,35.992,0,34.522c0.152-2.841,1.649-4.414,4.49-4.718c1.268,0.051,2.257,0.531,2.967,1.446c0.761,0.913,1.115,1.979,1.065,3.196l-0.457,2.054c0.153,0.304,0.406,0.433,0.761,0.382c0.711,0,1.496-0.33,2.359-0.99l1.978-1.599l3.196-12.021c-2.08,1.317-4.287,2.079-6.62,2.282C8.32,24.503,7.026,24.02,5.859,23.107";
    else if(denominator < 64)
        path = "M16.392,5.345l-0.228,0.676c0.301,0.653,0.803,0.802,1.505,0.451c2.356-1.102,4.185-2.805,5.489-5.112h1.051L8.646,57.528H6.541l5.715-20.525c-2.056,1.301-4.235,2.053-6.541,2.252c-1.505-0.049-2.808-0.525-3.911-1.428C0.702,36.923,0.1,35.745,0,34.292c0.15-2.805,1.629-4.358,4.436-4.66c2.508,0.352,3.835,1.781,3.985,4.285L7.97,36.251c0.151,0.297,0.401,0.422,0.751,0.373c0.752,0,1.556-0.326,2.408-0.979l2.028-1.803l3.083-11.803c-2.054,1.301-4.236,2.053-6.542,2.254c-1.454-0.05-2.756-0.526-3.91-1.43c-1.104-0.902-1.68-2.055-1.729-3.457c0.1-2.81,1.579-4.363,4.437-4.665c1.202,0.102,2.179,0.602,2.931,1.504c0.702,0.903,1.028,1.934,0.978,3.085l-0.45,1.956c0.149,0.299,0.4,0.424,0.752,0.375c0.752,0.049,1.553-0.277,2.405-0.98l2.031-2.027L20.45,6.998c-2.054,1.303-4.235,2.055-6.541,2.256C12.457,9.205,11.151,8.728,10,7.826c-1.104-0.902-1.681-2.081-1.73-3.534c0.049-2.407,1.278-3.936,3.685-4.587c1.252-0.2,2.331,0.126,3.232,0.979c0.953,0.802,1.429,1.854,1.429,3.157C16.717,4.392,16.641,4.893,16.392,5.345";
    else
        path = "M18.007,9.36c-1.439-0.05-2.729-0.521-3.87-1.414c-1.091-0.893-1.662-2.059-1.711-3.497c0.049-2.381,1.265-3.894,3.646-4.54c1.29-0.198,2.381,0.125,3.274,0.968c0.894,0.794,1.364,1.835,1.415,3.125l-0.299,1.488l-0.223,0.67c0.297,0.646,0.793,0.793,1.488,0.446c2.381-1.091,4.167-2.777,5.358-5.06h1.041L8.557,72.014H6.474l5.581-20.238c-1.984,1.289-4.117,2.033-6.4,2.229c-1.487-0.047-2.777-0.521-3.868-1.412C0.695,51.698,0.1,50.534,0,49.098c0.149-2.779,1.612-4.316,4.39-4.613c2.48,0.346,3.794,1.76,3.944,4.24l-0.447,2.309c0.149,0.295,0.397,0.42,0.744,0.371c0.695,0,1.463-0.322,2.307-0.967l2.009-1.789l3.199-11.756c-2.034,1.289-4.217,2.034-6.547,2.233c-1.438-0.047-2.729-0.521-3.87-1.414c-1.091-0.896-1.662-2.035-1.711-3.428c0.099-2.777,1.562-4.313,4.39-4.611c1.191,0.1,2.158,0.597,2.902,1.488c0.744,0.894,1.091,1.909,1.042,3.051l-0.446,1.937c0.149,0.297,0.397,0.426,0.744,0.371c0.744,0.055,1.538-0.271,2.381-0.968l2.01-2.012l3.273-11.531c-2.034,1.291-4.191,2.035-6.474,2.232c-1.488-0.049-2.802-0.521-3.943-1.413c-1.092-0.893-1.663-2.059-1.712-3.497c0.05-2.381,1.29-3.894,3.721-4.54c1.241-0.148,2.306,0.173,3.199,0.967c0.942,0.844,1.414,1.886,1.414,3.125l-0.223,1.563l-0.224,0.595c0.298,0.646,0.794,0.793,1.488,0.446c1.34-0.446,2.555-1.339,3.646-2.679L24.48,7.127C22.496,8.417,20.338,9.163,18.007,9.36";

    mElem.setAttribute("d", path);
    return mElem;  
}

function DrawNoteAtt(element) {
    var mElem;  //var to store the measure element draw

    switch(element) {
        case "NATURAL":
            mElem = document.createElementNS(xmlns, "path");  //create new path
            mElem.setAttribute("d", "M11.058-4v32.002H9.315V16.008L0,18.025v-32.393h1.674v12.499L11.058-4zM1.674,3.512v8.8l7.641-1.681v-8.8L1.674,3.512z");
            break;

        case "FLAT":
            mElem = document.createElementNS(xmlns, "path");  //create new path
            mElem.setAttribute("d", "M1.548-22.403v19.941c0,0,0,1.344,0,4.033c1.786-1.722,3.791-2.604,6.013-2.647c1.389,0,2.58,0.61,3.572,1.828c0.874,1.134,1.33,2.394,1.37,3.78c0.04,1.092-0.219,2.353-0.774,3.781c-0.198,0.588-0.635,1.219-1.31,1.89c-0.516,0.503-1.051,1.029-1.607,1.575C5.875,14.047,2.937,16.336,0,18.646v-41.049H1.548 M6.371,2.958C5.894,2.369,5.279,2.075,4.525,2.075c-0.954,0-1.727,0.567-2.322,1.702c-0.437,0.881-0.655,2.961-0.655,6.238v5.418c0.04,0.168,1.151-0.861,3.334-3.087c1.19-1.175,1.965-2.563,2.322-4.159c0.159-0.63,0.238-1.26,0.238-1.891C7.442,4.911,7.085,3.797,6.371,2.958");
            break;

        case "DOUBLE_FLAT":
            mElem = document.createElementNS(xmlns, "path");  //create new path
            mElem.setAttribute("d", "M1.548-22.403v19.941c0,0,0,1.344,0,4.033c1.786-1.722,3.791-2.604,6.013-2.647c1.389,0,2.58,0.61,3.572,1.828c0.874,1.134,1.33,2.394,1.37,3.78c0.04,1.092-0.219,2.353-0.774,3.78c-0.198,0.588-0.635,1.22-1.31,1.891c-0.516,0.503-1.051,1.029-1.607,1.574C5.875,14.047,2.937,16.336,0,18.646v-41.049H1.548 M6.371,2.958C5.894,2.369,5.279,2.075,4.525,2.075c-0.954,0-1.727,0.567-2.322,1.702c-0.437,0.881-0.655,2.961-0.655,6.239v5.418c0.04,0.168,1.151-0.861,3.334-3.088c1.19-1.175,1.965-2.563,2.322-4.158c0.159-0.63,0.238-1.261,0.238-1.892C7.442,4.911,7.085,3.797,6.371,2.958M15.61-22.403v19.941c0,0,0,1.344,0,4.033c1.786-1.722,3.791-2.604,6.013-2.647c1.389,0,2.58,0.61,3.572,1.828c0.874,1.134,1.33,2.394,1.37,3.78c0.04,1.092-0.219,2.353-0.774,3.781c-0.198,0.588-0.635,1.22-1.31,1.891c-0.516,0.503-1.051,1.029-1.607,1.574c-2.937,2.27-5.875,4.559-8.812,6.869v-41.05H15.61 M20.434,2.958c-0.477-0.589-1.092-0.883-1.846-0.883c-0.954,0-1.727,0.567-2.322,1.702c-0.437,0.881-0.655,2.961-0.655,6.239v5.418c0.04,0.168,1.151-0.861,3.334-3.088c1.19-1.175,1.965-2.563,2.322-4.158c0.159-0.631,0.238-1.261,0.238-1.892C21.504,4.911,21.147,3.796,20.434,2.958");
            break;

        case "SHARP":
            mElem = document.createElementNS(xmlns, "path");  //create new path
            mElem.setAttribute("d", "M4.907,15.006V2.586l5.147-1.457v12.357L4.907,15.006L4.907,15.006zM15.042,12.002l-3.539,1.04V0.685l3.539-1.014v-5.133l-3.539,1.014v-12.626h-1.45v13.009L4.906-2.547v-12.277H3.539v12.745L0-1.063V4.08l3.539-1.013V15.4L0,16.411v5.122l3.539-1.014v12.555h1.367V20.07l5.147-1.452v12.214h1.449V18.16l3.539-1.018L15.042,12.002L15.042,12.002z");
            break;

        case "DOUBLE_SHARP":
            mElem = document.createElementNS(xmlns, "path");  //create new path
            mElem.setAttribute("d", "M0.451,0.436C0.348,0.491,0.254,0.57,0.169,0.675C0.085,0.779,0.028,0.883,0,0.988c0.015,0.26,0.086,1.008,0.213,2.245C0.34,4.47,0.436,5.243,0.502,5.553c0.108,0.443,0.443,0.66,1.003,0.652c0.459,0.003,0.919,0.046,1.379,0.132c0.459,0.083,0.869,0.19,1.229,0.319c0.211,0.082,0.429,0.194,0.652,0.338c0.224,0.145,0.391,0.282,0.502,0.414l0.15,0.15l-0.201,0.15C4.852,8.064,4.34,8.345,3.68,8.549c-0.66,0.206-1.385,0.31-2.175,0.314C0.945,8.854,0.61,9.072,0.502,9.515C0.436,9.827,0.34,10.608,0.213,11.86C0.085,13.113,0.015,13.868,0,14.13c0.034,0.109,0.115,0.228,0.244,0.357s0.248,0.21,0.357,0.245c0.283-0.016,1.046-0.095,2.288-0.239c1.243-0.141,2.019-0.247,2.326-0.313c0.247-0.063,0.418-0.188,0.514-0.376c0.097-0.188,0.143-0.514,0.138-0.979c0.027-0.38,0.075-0.748,0.145-1.104c0.07-0.354,0.155-0.671,0.256-0.953c0.082-0.236,0.195-0.477,0.338-0.72C6.752,9.804,6.89,9.626,7.022,9.515l0.15-0.15l0.15,0.15c0.132,0.111,0.27,0.289,0.414,0.533c0.145,0.244,0.257,0.484,0.338,0.72c0.102,0.282,0.187,0.599,0.256,0.953c0.071,0.356,0.119,0.724,0.145,1.104c-0.004,0.464,0.042,0.79,0.138,0.979c0.096,0.188,0.267,0.313,0.514,0.376c0.308,0.067,1.083,0.172,2.326,0.313c1.243,0.144,2.006,0.222,2.289,0.239c0.109-0.034,0.228-0.116,0.357-0.245c0.128-0.128,0.21-0.248,0.244-0.357c-0.015-0.262-0.084-1.017-0.212-2.27c-0.127-1.252-0.223-2.034-0.289-2.345C13.735,9.072,13.4,8.854,12.84,8.863c-0.46-0.003-0.919-0.047-1.379-0.132s-0.869-0.191-1.229-0.32C10.021,8.33,9.804,8.217,9.58,8.072C9.356,7.929,9.189,7.791,9.079,7.659L8.928,7.508l0.202-0.149c0.364-0.355,0.875-0.636,1.536-0.84c0.658-0.206,1.384-0.31,2.175-0.313c0.56,0.008,0.895-0.209,1.003-0.652c0.065-0.312,0.161-1.094,0.289-2.346c0.128-1.251,0.199-2.009,0.212-2.27c-0.033-0.11-0.115-0.228-0.244-0.357c-0.129-0.128-0.248-0.21-0.357-0.245c-0.283,0.016-1.046,0.096-2.289,0.238c-1.243,0.143-2.018,0.247-2.325,0.313C8.882,0.95,8.711,1.076,8.615,1.265C8.519,1.452,8.472,1.778,8.477,2.242C8.45,2.623,8.402,2.99,8.332,3.346c-0.07,0.354-0.155,0.672-0.257,0.953C7.994,4.536,7.881,4.777,7.737,5.02C7.592,5.264,7.455,5.441,7.323,5.553l-0.15,0.15l-0.15-0.15C6.89,5.441,6.752,5.264,6.608,5.02C6.464,4.777,6.351,4.536,6.27,4.299C6.168,4.019,6.083,3.701,6.013,3.346C5.943,2.99,5.895,2.623,5.868,2.242c0.005-0.464-0.042-0.79-0.138-0.977C5.634,1.076,5.463,0.95,5.216,0.888C4.961,0.82,4.23,0.717,3.022,0.574c-1.208-0.142-1.964-0.222-2.27-0.238C0.652,0.344,0.551,0.378,0.451,0.436L0.451,0.436L0.451,0.436z");
            break;

        default:
            throw "INVALID_NOTE_ATT_TO_DRAW";

    }


    return mElem;
}


function DrawMeasureElement(element) {
    var mElem;  //var to store the measure element draw

    switch(element) {
        case "SIMPLE_BAR":
            mElem = document.createElementNS(xmlns, "line");  //create new line
            mElem.setAttribute("y2", 60);
            mElem.setAttribute("stroke", "#000");
            break;

        case "AUX_LINE1":
            mElem = document.createElementNS(xmlns, "line");  //create new line
            mElem.setAttribute("x2", 35);
            mElem.setAttribute("stroke", "#000");
            //mElem.setAttribute("stroke-width", "3");
            break;

        case "AUX_LINE2":
            mElem = document.createElementNS(xmlns, "line");  //create new line
            mElem.setAttribute("x2", 28);
            mElem.setAttribute("stroke", "#000");
            //mElem.setAttribute("stroke-width", "3");
            break;

        default:
            throw "INVALID_MEASURE_ELEMENT_TO_DRAW";
    }     

    return mElem;
}