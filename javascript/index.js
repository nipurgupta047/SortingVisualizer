/*

size =  for size of array
barArray = array of bar with random height
speed = speed of animation
turn = which sorting algo turn it is
        1-bubble
        2-insertion
        3-merge
        4-quick
boxHt = height of div of barArray
boxWt = width of div of barArray
maxHt = max height among bars

functions :

speedChange = for check for change in speedValue
initialize = to recreate array and initialize variables to default
bubbleSort = for carrying bubble Sort
bubbleSort1 = to call bubble sort function and display sorted array
insertionSort = for carrying insertion Sort
insertionSort1 = to call insertion sort function and display sorted array
mergeSort = for carrying merge Sort
mergeSort1 = to call merge sort function and display sorted array
quickSort = for carrying quick Sort
quickSort1 = to call quick sort function and display sorted array
partition = to find desired location of pivot element (we took last as the pivot element)
displaySorted = to display final array after Sorting
display = for displaying animations for bubble sort and insertion sort
display1 = for displaying animations for merge sort
display2 = for displaying animations for quick sort

*/


var size ;
var barArray = [];
var maxHt;
var speed ;
var boxHt = 568;
var boxWt = 1000;
var turn=-1;

initialize();
speedChange();

// for setting speed on change through speed bar
async function speedChange(){
  speed = (11-document.getElementById("speedValue").value)*80;
  document.getElementById("speedValueDisplay").innerHTML = document.getElementById("speedValue").value+"x";
}

//   creating random array and intialization   //
async function initialize(){
  size = Math.floor(document.getElementById("sizeValue").value);
  document.getElementById("sizeValueDisplay").innerHTML = size;
  barArray= [];
  maxHt=0;
  turn = -1;
  for(var i1=0;i1<size;i1++){
    var hgt = Math.floor((Math.floor(Math.random()*96) + 5)*(5.5));
    barArray.push(hgt);
    maxHt = Math.max(hgt,maxHt);
  }
  await timeout();
  displaySorted();

}
// for sleep
function timeout(){
  return new Promise(resolve => setTimeout(resolve,speed));
}


//                                //
//                                //
//    Bubble Sort Starts Here     //
//                                //
//                                //

async function bubbleSort(){

  if(turn!=1)
  return;

  for(var i=size-2;i>=0;i--){
    for(var j=0;j<=i;j++){
      if(turn!=1)
      return;
      await timeout();
      display(j,j+1);
      if(barArray[j]>barArray[j+1]){
        var temp = barArray[j+1];
        barArray[j+1] = barArray[j];
        barArray[j] = temp;
        await timeout();
        display(j,j+1);
      }
    }
  }

  return;

}

async function bubbleSort1(){
  await bubbleSort();
  await timeout();
  displaySorted();
  await timeout();
  if(turn!=1)
  return;
  alert("Array Has Been Sorted");
}


//                                //
//                                //
//   Insertion Sort Starts Here   //
//                                //
//                                //


async function insertionSort(){

  for(var i=1;i<size;i++){
    var j=i;
    while(j>=1 && barArray[j]<barArray[j-1]){
      if(turn!=2)
      return;
      await timeout();
      display(j,j-1);
      if(barArray[j]<barArray[j-1]){
        var temp = barArray[j-1];
        barArray[j-1] = barArray[j];
        barArray[j] = temp;
        await timeout();
        display(j,j-1);
      }
      j--;
    }
  }

  return;
}

async function insertionSort1(){
  await insertionSort();
  await timeout();
  displaySorted();
  await timeout();
  if(turn!=2)
  return;
  alert("Array Has Been Sorted");
}


//                                //
//                                //
//     Merge Sort Starts Here     //
//                                //
//                                //

async function merge(l ,r){

  var mid=Math.floor((l+r)/2);
  var l1=l,r1=mid,l2=mid+1,r2=r;
  tempArray = [];
  while(l1<=r1&&l2<=r2){
    if(barArray[l1]>barArray[l2]){
      tempArray.push(barArray[l2]);
      l2++;
    }
    else{
      tempArray.push(barArray[l1]);
      l1++;
    }
  }
  while(l1<=r1){
    tempArray.push(barArray[l1]);
    l1++;
  }
  while(l2<=r2){
    tempArray.push(barArray[l2]);
    l2++;
  }

  for(var i=l;i<=r;i++){
    if(turn!=3)
    return;
    barArray[i] = tempArray[i-l];
    await timeout();
    display1(l,r,i);
  }

}

async function mergeSort(l,r){
  if(l>=r)
  return;
  if(turn!=3)
  return;
  var mid=Math.floor((l+r)/2);
   await mergeSort(l,mid);
   await mergeSort(mid+1,r);
   await merge(l,r);
   return;
}

async function mergeSort1(l,r){
  if(turn!=3)
  return;
  await mergeSort(l,r);
  await timeout();
  displaySorted();
  await timeout();
  if(turn!=3)
  return;
  alert("Array Has Been Sorted");
}


//                                //
//                                //
//     Quick Sort Starts Here     //
//                                //
//                                //

async function partition(l ,r){
  var low = l;
  var pivot = barArray[r];
  for(var i=l;i<r;i++){
    if(turn!=4)
    return;
    await timeout();
    display2(l,r,low,i);
    if( barArray[i]<pivot){
      var temp = barArray[i];
      barArray[i] = barArray[low];
      barArray[low] = temp;
      await timeout();
      display2(l,r,low,i);
      low++;
    }

  }
  if(turn!=4)
  return;
  var temp = barArray[r];
  barArray[r] = barArray[low];
  barArray[low] = temp;
  await timeout();
  display2(l,r,low,r);

  return low;
}

async function quickSort(l,r){
  if(l>=r)
  return;
  if(turn!=4)
  return;
  var mid=await partition(l,r);
   await quickSort(l,mid-1);
   await quickSort(mid+1,r);
   return;
}

async function quickSort1(l,r){
  if(turn!=4)
  return;
  await quickSort(l,r);
  await timeout();
  displaySorted();
  await timeout();
  if(turn!=4)
  return;
  alert("Array Has Been Sorted");
}

//                        //
//     Display Array      //
//                        //

//                        //
//   Display Sorted arr   //
//                        //


async function displaySorted(){

  box.innerHTML="";

  for(var i=0;i<size;i++){
    bar = document.createElement('div');
    bar.classList.add('try');

    {bar.style.height = barArray[i] + 'px';}
    box.appendChild(bar);
  }

  var x=document.getElementsByClassName('try');
  for(var i=0;i<x.length;i++)
  {
    document.getElementsByClassName('try')[i].style.top = boxHt-maxHt + 'px';
    document.getElementsByClassName('try')[i].style.width = boxWt/size + 'px';
  }

}

//                                   //
//   Display for Bubble & insertion  //
//                                   //

async function display(ov1,ov2){

  box.innerHTML="";


  for(var i=0;i<size;i++){
    bar = document.createElement('div');
    bar.classList.add('try');

    {bar.style.height = barArray[i] + 'px';}
    box.appendChild(bar);
  }

  var x=document.getElementsByClassName('try');
  for(var i=0;i<x.length;i++)
  {
    document.getElementsByClassName('try')[i].style.top = boxHt-maxHt + 'px';
    document.getElementsByClassName('try')[i].style.width = boxWt/size + 'px';
  }

  {
    document.getElementsByClassName('try')[ov1].style.backgroundColor = 'purple';
    document.getElementsByClassName('try')[ov2].style.backgroundColor = 'purple';
  }

}

//                           //
//   Display for Merge       //
//                           //

async function display1(ov1,ov2,ov3){

  box.innerHTML="";

  for(var i=0;i<size;i++){
    bar = document.createElement('div');
    bar.classList.add('try');

    {bar.style.height = barArray[i] + 'px';}
    box.appendChild(bar);
  }

  var x=document.getElementsByClassName('try');
  for(var i=0;i<x.length;i++)
  {
    document.getElementsByClassName('try')[i].style.top = boxHt-maxHt + 'px';
    document.getElementsByClassName('try')[i].style.width = boxWt/size + 'px';
  }

  for(var i=ov1;i<=Math.floor((ov1+ov2)/2);i++)
  {
    document.getElementsByClassName('try')[i].style.backgroundColor = 'purple';
  }
  for(var i=Math.floor((ov1+ov2)/2)+1;i<=ov2;i++)
  {
    document.getElementsByClassName('try')[i].style.backgroundColor = '#659DBD';
  }
  for(var i=ov1;i<ov3;i++)
  {
    document.getElementsByClassName('try')[i].style.backgroundColor = '#DAAD86';
  }

  document.getElementsByClassName('try')[ov3].style.backgroundColor = 'yellow';

}



//                           //
//   Display for Quick       //
//                           //

async function display2(ov1,ov2,ov3,ov4){

  box.innerHTML="";

  for(var i=0;i<size;i++){
    bar = document.createElement('div');
    bar.classList.add('try');

    {bar.style.height = barArray[i] + 'px';}
    box.appendChild(bar);
  }

  var x=document.getElementsByClassName('try');
  for(var i=0;i<x.length;i++)
  {
    document.getElementsByClassName('try')[i].style.top = boxHt-maxHt + 'px';
    document.getElementsByClassName('try')[i].style.width = boxWt/size + 'px';
  }

  for(var i=ov1;i<=ov2;i++)
  {
    document.getElementsByClassName('try')[i].style.backgroundColor = 'purple';
  }

  {
    document.getElementsByClassName('try')[ov3].style.backgroundColor = '#DAAD86';
    document.getElementsByClassName('try')[ov4].style.backgroundColor = '#DAAD86';
  }

  document.getElementsByClassName('try')[ov2].style.backgroundColor = 'yellow';

}


//                     //
//   Event Listeners   //
//                     //

// for create new array button
let btn1 = document.getElementById("button1");
btn1.addEventListener('click' , event =>{
  document.getElementById("bubble").style.backgroundColor = '';
  document.getElementById("insertion").style.backgroundColor = '';
  document.getElementById("merge").style.backgroundColor = '';
  document.getElementById("quick").style.backgroundColor = '';
  initialize();
});

// for bubble sort button
let bubble1 = document.getElementById("bubble");
bubble1.addEventListener('click' , event =>{
  document.getElementById("bubble").style.backgroundColor = '#04AA6D';
  document.getElementById("insertion").style.backgroundColor = '';
  document.getElementById("merge").style.backgroundColor = '';
  document.getElementById("quick").style.backgroundColor = '';
  if(barArray.length ===0)
  initialize();
  if(turn!=1)
  {turn=1;bubbleSort1();}

});

// for insertion sort button
let insertion1 = document.getElementById("insertion");
insertion1.addEventListener('click' , event =>{
  document.getElementById("bubble").style.backgroundColor = '';
  document.getElementById("insertion").style.backgroundColor = '#04AA6D';
  document.getElementById("merge").style.backgroundColor = '';
  document.getElementById("quick").style.backgroundColor = '';
  if(barArray.length ===0)
  initialize();
  if(turn!=2){
    turn=2;
    insertionSort1();
  }
});

// for merge sort button
let merge1 = document.getElementById("merge");
merge1.addEventListener('click' , event =>{
  document.getElementById("bubble").style.backgroundColor = '';
  document.getElementById("insertion").style.backgroundColor = '';
  document.getElementById("merge").style.backgroundColor = '#04AA6D';
  document.getElementById("quick").style.backgroundColor = '';
  if(barArray.length ===0)
  initialize();
  if(turn!=3){
    turn=3;
    mergeSort1(0,size-1);
  }

});

// for quick sort button
let quick1 = document.getElementById("quick");
quick1.addEventListener('click' , event =>{
  document.getElementById("bubble").style.backgroundColor = '';
  document.getElementById("insertion").style.backgroundColor = '';
  document.getElementById("merge").style.backgroundColor = '';
  document.getElementById("quick").style.backgroundColor = '#04AA6D';
  if(barArray.length ===0)
  initialize();
  if(turn!=4){
    turn=4;
    quickSort1(0,size-1);
  }
});

// slider input change for size of array
let slider1 = document.getElementById("sizeValue");
slider1.addEventListener("change", initialize);

// slider input change for speed of trasition
let slider2 = document.getElementById("speedValue");
slider2.addEventListener("change", speedChange);
