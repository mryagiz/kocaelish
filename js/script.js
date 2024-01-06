
var scriptGlobal = ``;

$("#modal-welcome").iziModal({
	title: "<center><b>sağlıklı ve mutlu yıllar.</b><br>HOŞ GELDİN 2025!</center>",
	subtitle: "",
	color:'#FFFFFF',
	icon: 'fas fa-snowflake',
	iconColor:'   #FFFFFF',
	headerColor: '#af1f1f',
	width: 500,
	timeout: 5500,
	timeoutProgressbar: true,
	transitionIn: 'fadeInUp',
	transitionOut: 'fadeOutDown',
	/*attached: 'bottom',*/
	history: false,
	autoOpen: true/*,
	onClosed: function(){
		$("html").removeClass('overflow-hidden');
	}*/
});


// burası izimodal resim

$("#modal-welcome").iziModal("setContent", "<img src='../img/2024.jpg' width='500' height='500' alt='2024'>"); 



$("#modal-alert2").iziModal({
	title: "HAYDAAAAA!",
	subtitle: 'SANKİ BİR YERİ DOLDURMAYI UNUTTUN HACI',
	icon: 'fas fa-spell-check',
	iconColor:'#FFC300',
	headerColor: '#000000',
	width: 400,
	timeout: 2000,
	timeoutProgressbar: true,
	transitionIn: 'fadeInDown',
	transitionOut: 'fadeOutDown',
	pauseOnHover: true
});


function pagone() {
	document.getElementById("inputGroup1").style.display = "flex";
	document.getElementById("inputForm1").style.display = "flex";
	document.getElementById("bitik1").style.display = "flex";
	document.getElementById("bitik2").style.display = "none";
	document.querySelector(".btn-group").style.display = "none";
	document.getElementById("inputForm2").style.display = "none";
	document.getElementById("inputGroup2").style.display = "none";
	document.getElementById("codearea").style.display = "flex";
	document.getElementById("qrcode").style.display = "none";
	clearScript();
}

function pagetwo() {
	document.getElementById("inputGroup1").style.display = "none";
	document.getElementById("inputForm1").style.display = "none";
	document.getElementById("inputGroup2").style.display = "none";
	document.getElementById("inputForm2").style.display = "none";
	document.getElementById("bitik1").style.display = "none";
	document.getElementById("bitik2").style.display = "none";
	document.querySelector(".btn-group").style.display = "flex";
	document.getElementById("codearea").style.display = "flex";
	document.getElementById("qrcode").style.display = "none";
	clearScript();
}

function pagethree() {
	document.getElementById("inputGroup1").style.display = "none";
	document.getElementById("inputForm1").style.display = "none";
	document.getElementById("bitik1").style.display = "none";
	document.querySelector(".btn-group").style.display = "none";
	document.getElementById("bitik2").style.display = "flex";
	document.getElementById("inputGroup2").style.display = "flex";
	document.getElementById("inputForm2").style.display = "flex";
	document.getElementById("codearea").style.display = "flex";
	document.getElementById("qrcode").style.display = "none";
	clearScript();
}

function pagefour() {
	document.getElementById("inputGroup1").style.display = "none";
	document.getElementById("inputForm1").style.display = "none";
	document.getElementById("bitik1").style.display = "none";
	document.querySelector(".btn-group").style.display = "none";
	document.getElementById("bitik2").style.display = "none";
	document.getElementById("inputGroup2").style.display = "none";
	document.getElementById("inputForm2").style.display = "none";
	document.getElementById("codearea").style.display = "none";
	document.getElementById("qrcode").style.display = "flex";
	clearScript();
}

function htmlEncode(value) {
	return $('<div/>').text(value).html();
}

$(function() {
	$("#generate").click(function() {
		var value1 = document.getElementById("content").value.trim();
		if ((value1 === "")) {
			$("#modal-alert2").iziModal("open");
			return;
		}
		$(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content").val()) + "&chs=250x250&chld=L|0");
		showToast2();
	});
});

function openKeyButton() {
	var publicarea = document.getElementById("here3").value;
	var username = document.getElementById("here4").value;

	var value1 = document.getElementById("here3").value.trim();
	var value2 = document.getElementById("here4").value.trim();

	if ((value1 === "") || (value2 === "")) {
		$("#modal-alert2").iziModal("open");
		return;
	}

	scriptGlobal = `#!/bin/bash

cat <<\\EOF > /KEYDATA/Script/MountAuto.sh
#!/bin/bash

MountKontrol=\`mount | grep 10.241.1.141 | wc -l\`

if [ "$MountKontrol" == "1" ]; then
  echo "Çalışıyor"
else
  mount -t cifs //10.241.1.141/${publicarea} /mnt/${publicarea} -o username=${username},password=1_${publicarea}_06*,noexec,rw,file_mode=0777,dir_mode=0777
fi

exit 0
EOF

chmod 755 /KEYDATA/Script/MountAuto.sh

CronKontrol=\`cat /etc/crontab | grep MountAuto | wc -l\`

if [ "$CronKontrol" == "1" ]; then
  echo "Eklenmiş"
else	
echo "### İlgili Ortak Alanın Kilidi Açılmıştır. Kullanıcıya F5 ile yenilemesini söyle! ###
*/5 * * * * root /KEYDATA/Script/MountAuto.sh" >> /etc/crontab
fi`;

	document.getElementById("scriptOutput").value = scriptGlobal;
	document.getElementById("result").innerHTML = "";
}

function handleButtonClick(event) {
	const buttonText = event.target.innerText.trim();

	switch (buttonText) {
		case "2.Ekran":
			document.getElementById("scriptOutput").value = `wget --no-check-certificate -P /tmp/ https://keyos.kocaelish.com:8443/Script/Kernel.sh && chmod 755 /tmp/Kernel.sh && /tmp/Kernel.sh && rm -rf /tmp/Kernel.sh`;
			break;
		case "DomainFix":
			document.getElementById("scriptOutput").value = `ipa-client-install --domain=kocaelish.local --enable-dns-updates --mkhomedir -p sys.domain -w KeyD@T@2020* --realm=KOCAELİSH.LOCAL --unattended --ntp-server=10.241.1.11 --force-join
/KEYDATA/Script/Calistir.sh`;
			break;
		case "PanelFix":
			document.getElementById("scriptOutput").value = `wget --no-check-certificate -P /tmp/ https://keyos.kocaelish.com:8443/Script/Guncelleme/Duzeltme.sh && chmod 755 /tmp/Duzeltme.sh && /tmp/Duzeltme.sh && rm -rf /tmp/Duzeltme.sh
ls -la /home/kullanici.adi/
/KEYDATA/Script/Cleanup.sh`;
			break;
			case "Akis":
						document.getElementById("scriptOutput").value = `#!/bin/bash

rm -rf /KEYDATA/Script/akisyuklendi
rm -rf /KEYDATA/Script/libakisyuklendi

### Akis Kontrol ve Güncelleme Start ###

AkisKontrol="cat /KEYDATA/Script/akisyuklendi | grep akis-2.0 | wc -l"

if [ "$AkisKontrol" == "0" ];then
		wget -P /tmp/ https://keyos.kocaelish.com:8443/Script/Arksigner/akis_2.0_amd64.deb
        sleep 2
        dpkg -i /tmp/akis_2.0_amd64.deb
        apt-get -f install -y
        apt-get autoremove -y
        sleep 2
        rm -rf /tmp/akis_2.0_amd64.deb
        touch /KEYDATA/Script/akisyuklendi
        echo "akis-2.0" > /KEYDATA/Script/akisyuklendi
else
        echo "Update Yapılı"
fi

### Akis Kontrol ve Güncelleme End ###


### Lib ACS Akis Kontrol ve Güncelleme Start ###

AkisKontrol="cat /KEYDATA/Script/libakisyuklendi | grep libakis-1.1.8 | wc -l"

if [ "$AkisKontrol" == "0" ];then
        wget -P /tmp/ https://keyos.kocaelish.com:8443/Script/Arksigner/libacsccid1_1.1.8-1~ubuntu16.04.1_amd64.deb
        sleep 2
        dpkg -i /tmp/libacsccid1_1.1.8-1~ubuntu16.04.1_amd64.deb
        apt-get -f install -y
        apt-get autoremove -y
        sleep 2
        rm -rf /tmp/libacsccid1_1.1.8-1~ubuntu16.04.1_amd64.deb
        touch /KEYDATA/Script/libakisyuklendi
        echo "libakis-1.1.8" > /KEYDATA/Script/libakisyuklendi
else
        echo "Update Yapılı"
fi

### Lib ACS Akis Kontrol ve Güncelleme End ###

`;
						break;
		default:
			break;
	}
}

function submitForm(event) {
	event.preventDefault();

	var publicarea = document.getElementById("here").value;
	var username = document.getElementById("here2").value;

	scriptGlobal = `#!/bin/bash

FSKontrol=\`grep 10.241.1.141 /etc/fstab | wc -l\`
if [ "$FSKontrol" == "1" ];then
        echo "FSKontrol Ayarlar Yapılı"
else
        apt-get install cifs-utils -y
        mkdir /mnt/${publicarea}
        ln -s /mnt/${publicarea} /etc/skel/Desktop/
        mount -t cifs //10.241.1.141/${publicarea} /mnt/${publicarea} -o username=${username},password=1_${publicarea}_06*,noexec,rw,file_mode=0777,dir_mode=0777
        echo "username=${username}
password=1_${publicarea}_06*" > /etc/samba/.smbcredentials
        echo "//10.241.1.141/${publicarea} /mnt/${publicarea} cifs nofail,credentials=/etc/samba/.smbcredentials,noexec,rw,file_mode=0777,dir_mode=0777  0 0" >> /etc/fstab
		        C=\`ls /home/ | awk '{print $1}' | wc -l\`
		        T=1
        while [ "$T" -le "$C" ]; do
        Users=\`ls /home/ | awk '{print $1}' | head -$T | tail -1\`
        ln -s /mnt/${publicarea} /home/$Users/Desktop/
        T=$[$T+1]
        done
        echo "FSKontrol Ayarlar Yapıldı"
fi`;

	document.getElementById("scriptOutput").value = scriptGlobal;
	document.getElementById("result").innerHTML = "";
}

function clearScript() {
	document.getElementById("here").value = "";
	document.getElementById("here2").value = "";
	document.getElementById("here3").value = "";
	document.getElementById("here4").value = "";
	document.getElementById("scriptOutput").value = ` `;
}

function copyScript() {

	var scriptOutputq = document.getElementById("scriptOutput").value.trim();

	if (scriptOutputq === "") {
		// Eğer scriptOutput alanı boşsa, işlemleri yapmadan kullanıcıya uyarı verin
		return;
	}
	var scriptOutput = document.getElementById("scriptOutput");
	scriptOutput.select();
	scriptOutput.setSelectionRange(0, 99999);
	document.execCommand("copy");
	showToast();
}

function showToast() {
	var toast = $('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">')
		.addClass('toast-message')
		.append('<div class="toast-header text-center">' +
			'<strong class="mr-auto" style="text-align:center">Bi TIK oldu gibi!</strong>' +
			'</div>')
		.append('<div class="toast-body">Kod kopyalandı!</div>');

	$('.toast-container').html(toast);
	$('.toast').toast({ delay: 2000 }).toast('show');
}

function showToast2() {
	var toast = $('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">')
		.addClass('toast-message')
		.append('<div class="toast-header text-center">' +
			'<strong class="mr-auto" style="text-align:center">Bi TIK oldu gibi!</strong>' +
			'</div>')
		.append('<div class="toast-body">QR Oluşturuldu!</div>');

	$('.toast-container').html(toast);
	$('.toast').toast({ delay: 1000 }).toast('show');
}

window.onload = (event) => {
	let myAlert = document.querySelectorAll('.toast')[0];
	if (myAlert) {
		let bsAlert = new bootstrap.Toast(myAlert);
		bsAlert.show();
	}
};