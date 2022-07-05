//profile
var a,n,e,m,d,age,g,edu,status,w,profileInfo;
function nextAddress(status){
    a=StudentInfo.aadhar.value;
    n=StudentInfo.name.value;
    e=StudentInfo.email.value;
    m=StudentInfo.mob.value;
    d=StudentInfo.dob.value;
    age=StudentInfo.age.value;
    g=StudentInfo.gender[StudentInfo.gender.selectedIndex].value;
    edu="";
    with(StudentInfo)
    {
        if(ten.checked==true)
            edu+=ten.value+"<br/>";
        if(twelve.checked==true)
            edu+=twelve.value+"<br/>";
        if(diploma.checked==true)
            edu+=diploma.value+"<br/>";
        if(bachelor.checked==true)
            edu+=bachelor.value;    
    }
        profileInfo="Aadhar No : "+a+"<br/>Name : "+n+'<br/>Email : '+e+"<br/>Mobile No : "+m+"<br/>DOB : "+d+"<br/>Age : "+age+"<br/>Gender : "+g+"<br/>Education : <br/>"+edu+"<br/>Status : "+status;
        var b=confirm("Record saved successfully. Do you want to continue?");
        if(b==true)
        {
			w=window.open("","","height=600,width=600,top=200,left=600");
			w.document.write("<h1>Your Information</h1>");
			w.document.write("<p style='font-size:24px;'>"+profileInfo+"</p>");
            location.assign("Address.html")
        }
        else
            location.reload();    
    parent.buttons.b1.style.background="";
    parent.buttons.b2.style.background="rgb(19, 253, 11)";
}

//Menu's of Address.html
//states
Australia1=new Array("New south wales","Queensland","South Australia","Tasmania","Victoria","western Australia");
Brazil=new Array("Sao paulo","Bahia","Parana","Ceara","Golas","Acre","Roraima");
Canada=new Array("Alberta","British Columbia","Nova Scotia","Ontario","Saskatchewan");
Egypt=new Array("Cairo","Alexandria","Giza","Matai","Sherbin");
France=new Array("Corse","Centre","Brittany","Occitanie");
Germany=new Array("Bavaria","Saxony","Hessen","Berlin","Bremen");
India=new Array("Uttar Pradesh","Kerala","Assam","Maharashtra","Telangana","West Bangal","Gujarat","Bihar","Rajasthan","Goa");
Japan=new Array("Akita","Ibaraki","Miyagi","Aomori","lwate","Yamagata");
Korea=new Array("Seoul","Busan","Incheon","Chungnam","Gangwon","Jeju");
Mexico=new Array("Jalisco","Chiapas","Yacatan","Sonora","Nayarit","Sinaloa");
Nepal=new Array("Lumbini","Bagmati","Gandaki","Karnali");
Oman=new Array("Muscat","Dhofar","Musandam","Buryami","Dakhiliyah","North Batinah");
Pakistan=new Array("Balochistan","Azad Jammu and Kashmir","Punjab","Sindh","Gilgit-Balitisan");
Russia=new Array("Amur","Belgorod","Chuktka","Ivanovo","Kaluga","Komi","Kursk");
SouthAfrica=new Array("Limpopo","Gauteng","Mpumalanga","KwaZulu-Natal","Northern Cape");
SriLanka=new Array("Kandy","Badulla","Ratnapura","Trincomalee");
UK=new Array("England");

function showStates(x)
{
	for(i=document.StudentInfo.state.options.length-1;i>0;i--)
	{
		document.StudentInfo.state.options[i].remove;
	}
	stateNames=x.options[x.selectedIndex].value;
	if(stateNames!='')
	{
		if(stateNames=='Australia'){
			for(i=1;i<=Australia1.length;i++){
				document.StudentInfo.state.options[i]=new Option(Australia1[i-1]);
			}
		}
		if(stateNames=='Brazil'){
			for(i=1;i<=Brazil.length;i++){
				StudentInfo.state.options[i]=new Option(Brazil[i-1]);
			}
		}
		if(stateNames=='Canada'){
			for(i=1;i<=Canada.length;i++){
				StudentInfo.state.options[i]=new Option(Canada[i-1]);
			}
		}
		if(stateNames=='Egypt'){
			for(i=1;i<=Egypt.length;i++){
				StudentInfo.state.options[i]=new Option(Egypt[i-1]);
			}
		}
		if(stateNames=='France'){
			for(i=1;i<=France.length;i++){
				StudentInfo.state.options[i]=new Option(France[i-1]);
			}
		}
		if(stateNames=='Germany'){
			for(i=1;i<=Germany.length;i++){
				StudentInfo.state.options[i]=new Option(Germany[i-1]);
			}
		}
		if(stateNames=='India'){
			for(i=1;i<=India.length;i++){
				StudentInfo.state.options[i]=new Option(India[i-1]);
			}
		}
		if(stateNames=='Japan'){
			for(i=1;i<=Japan.length;i++){
				StudentInfo.state.options[i]=new Option(Japan[i-1]);
			}
		}
		if(stateNames=='Korea'){
			for(i=1;i<=Korea.length;i++){
				StudentInfo.state.options[i]=new Option(Korea[i-1]);
			}
		}
		if(stateNames=='Mexico'){
			for(i=1;i<=Mexico.length;i++){
				StudentInfo.state.options[i]=new Option(Mexico[i-1]);
			}
		}
		if(stateNames=='Nepal'){
			for(i=1;i<=Nepal.length;i++){
				StudentInfo.state.options[i]=new Option(Nepal[i-1]);
			}
		}
		if(stateNames=='Oman'){
			for(i=1;i<=Oman.length;i++){
				StudentInfo.state.options[i]=new Option(Oman[i-1]);
			}
		}
		if(stateNames=='Pakistan'){
			for(i=1;i<=Pakistan.length;i++){
				StudentInfo.state.options[i]=new Option(Pakistan[i-1]);
			}
		}
		if(stateNames=='Russia'){
			for(i=1;i<=Russia.length;i++){
				StudentInfo.state.options[i]=new Option(Russia[i-1]);
			}
		}
		if(stateNames=='SouthAfrica'){
			for(i=1;i<=SouthAfrica.length;i++){
				StudentInfo.state.options[i]=new Option(SouthAfrica[i-1]);
			}
		}
		if(stateNames=='SriLanka'){
			for(i=1;i<=SriLanka.length;i++){
				StudentInfo.state.options[i]=new Option(SriLanka[i-1]);
			}
		}
		if(stateNames=='UK'){
			for(i=1;i<=UK.length;i++){
				StudentInfo.state.options[i]=new Option(UK[i-1]);
			}
		}
	}
}
function noFillPermanent()
{
	document.getElementById("results1").style.display="block";
	StudentInfo.Paddress.value="";
	StudentInfo.Pcountry.value="";
	StudentInfo.Pstate.value="";
	StudentInfo.Ppincode.value="";
}
function fillPermanent()
{
	document.getElementById("results1").style.display="block";
	StudentInfo.Paddress.value=StudentInfo.address.value;
	StudentInfo.Pcountry.value=StudentInfo.country.value;
	StudentInfo.Pstate.value=StudentInfo.state.value;
	StudentInfo.Ppincode.value=StudentInfo.pincode.value;
}

//address
function backProfile(){
    location.assign("Profile.html");
    parent.buttons.b1.style.background="rgb(19, 253, 11)";
    parent.buttons.b2.style.background="";
    parent.buttons.b3.style.background="";
}
function nextOther(){
    parent.buttons.b1.style.background="";
    parent.buttons.b3.style.background="rgb(19, 253, 11)";
    parent.buttons.b2.style.background="";
	var xx=confirm("Do you want to save this Information and continue?");
	if(xx=true)
	{
		ww=window.open("","","height=600,width=600,top=200,left=600");
		ww.document.write("<h1>Your Information</h1>");
		country=StudentInfo.country[StudentInfo.country.selectedIndex].value;
		ww.document.write("<p style='font-size:24px;'>Address : "+StudentInfo.address.value+"<br/>Country : "+country+"<br/>State : "+StudentInfo.state.value+"<br/>Pincode : "+StudentInfo.pincode.value+"</p>");
		location.assign("Other.html");
	}
	else if(xx==false)
		location.reload();
}

//other
function backAddress(){
    parent.buttons.b1.style.background="";
    parent.buttons.b3.style.background="";
    parent.buttons.b2.style.background="rgb(19, 253, 11)";
    location.assign("Address.html");
}
function nextPage(){
    parent.buttons.b1.style.background="";
    parent.buttons.b2.style.background="";
    parent.buttons.b3.style.background="";
    parent.buttons.b4.style.background="rgb(19, 253, 11)";
    var xyz=confirm("Do you want to save this Information and continue?");
	if(xyz==true)
	{
		var w2;
		w2=window.open("","","height=600,width=600,top=200,left=600");
		w2.document.write("<h1>Father's Information</h1>");
		w2.document.write("<p style='font-size:24px;'>Name:"+StudentInfo.DName.value+"<br/>Occupation : "+StudentInfo.DOccupation.value+"<br/>Salary : "+StudentInfo.DSalary[StudentInfo.DSalary.selectedIndex].value+"</p>");
		
		w2.document.write("<h1>Mother's Information</h1>");
		w2.document.write("<p style='font-size:24px;'>Name:"+StudentInfo.MName.value+"<br/>Occupation : "+StudentInfo.MOccupation.value+"<br/>Salary : "+StudentInfo.MSalary[StudentInfo.MSalary.selectedIndex].value+"</p>");
		location.assign("Course.html");
	}
	else if(xyz==false)
		location.reload();
}

//course
function saveInfo(){
    var w=window.open("","",top=250,left=350,height=500,width=500,location='yes');
    w.document.write("<h1>Course Information</h1>");
    w.document.write("<p style='font-size:24px;'>Year : "+StudentInfo.Year[StudentInfo.Year.selectedIndex].value);
	w.document.write("<br/>State : "+StudentInfo.State[StudentInfo.State.selectedIndex].value);
	w.document.write("<br/>District : "+StudentInfo.District[StudentInfo.District.selectedIndex].value);
	w.document.write("<br/>Taluka : "+StudentInfo.Taluka[StudentInfo.Taluka.selectedIndex].value);
	w.document.write("<br/>Qualification Level : "+StudentInfo.QualificationLevel[StudentInfo.QualificationLevel.selectedIndex].value);
	w.document.write("<br/>Stream : "+StudentInfo.Stream[StudentInfo.Stream.selectedIndex].value);
	w.document.write("<br/>College Name : "+StudentInfo.CollegeName[StudentInfo.CollegeName.selectedIndex].value);
	w.document.write("<br/>Course Name : "+StudentInfo.CourseName[StudentInfo.CourseName.selectedIndex].value);
	w.document.write("<br/>Admission Type : "+StudentInfo.AdmissionType[StudentInfo.AdmissionType.selectedIndex].value);
	w.document.write("<br/>Score : "+StudentInfo.Score.value);
	w.document.write("<br/>Admission ID : "+StudentInfo.AdmitCard.value);
	w.document.write("<br/>Current Year : "+StudentInfo.YearNext[StudentInfo.YearNext.selectedIndex].value);	
	w.document.write("<br/>Complete : "+StudentInfo.Complete[StudentInfo.Complete.selectedIndex].value);
	w.document.write("<br/>Category : "+StudentInfo.Category[StudentInfo.Category.selectedIndex].value);
	w.document.write("<br/>Gap Years : "+StudentInfo.GapYears.value);
	w.document.write("<br/>Mode : "+StudentInfo.Mode[StudentInfo.Mode.selectedIndex].value+"</p>");
}
function backOther(){
	parent.buttons.b4.style.background="";
	parent.buttons.b3.style.background="rgb(19, 253, 11)";
	location.href="Other.html";
}
