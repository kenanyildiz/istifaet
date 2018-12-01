<template>
  <b-modal id="cookieModal"
           ref="cookieModal"
           size="lg"
           :hide-header-close="true"
           :centered="false"
           :title='$t("cookie_policy")'
           :header-bg-variant="modalOpts.headerBgVariant"
           :header-text-variant="modalOpts.headerTextVariant"
           :body-bg-variant="modalOpts.bodyBgVariant"
           :body-text-variant="modalOpts.bodyTextVariant"
           :footer-bg-variant="modalOpts.footerBgVariant"
           :footer-text-variant="modalOpts.footerTextVariant">
    <b-container fluid>
      <b-row class="text-left">
        <b-col>
          <p>Gizliliğiniz bizim için önemlidir, gizlilik ve güvenlik haklarınız temel
            prensibimizdir. Müşterilerimizin kişisel bilgilerinin gizliliğini korumak amacıyla bankamız sistem ve internet
            altyapısı en güvenilir seviyede tutularak gerekli önlemler alınmıştır.</p>
          <p>Web sitemize şahsi herhangi bir bilgi vermeden ziyaret edebilir, ürünlerimiz ve
            servislerimiz hakkında bilgi alarak ihtiyaçlarınızı karşılayabilirsiniz. Ziyaretlerde site kullanımına ilişkin
            bilgi toplamak için çerez kullanılmaktadır. Buradaki amacımız; web sitemizi ziyaret eden kullanıcıya kolaylık
            sağlamak ve işleyişi daha iyiye nasıl taşıyabileceğimizi anlamaktır.</p>
          <p>Çerez, bir web sitesini ziyaret ettiğinizde bilgisayarınıza gönderilen ve bir dizi
            karakter içeren küçük bir dosyadır. Çerezler bir web sitesinin daha kullanıcı dostu deneyim sunmasını amaçlar.
            Kişisel ihtiyaçlarınıza daha uygun ve hızlı bir ziyaret deneyimi yaşatmak için kişiselleştirilmiş web sayfaları
            sunulabilmesine olanak vermektedir. Çerezler bilgisayarınızda veya dosyalarınızda depolanan kişisel
            verileriniz&nbsp;de dahil&nbsp;herhangi bir bilgi toplayamamaktadır.</p>
          <p>Geçerlilik sürelerine göre Kalıcı Çerez ve Geçici Çerez olarak iki çerez tipi
            bulunmaktadır. Geçici çerezler internet sitesini ziyaret ettiğiniz esnada oluşturulur ve sadece tarayıcınızı
            kapatıncaya kadar geçerlidirler. Kalıcı çerezler ise internet sitesini ziyaret ettiğinizde oluşturulur ve siz
            silinceye veya süreleri doluncaya kadar kalırlar. Ayarlarınız ile uyumlu kişiselleştirilmiş bir deneyim sunma
            gibi işlemler yapmak için kalıcı çerezler kullanılırlar.</p>
          <p>Web sitemiz geçici ve kalıcı tip çerezleri, sizi web sitemizin diğer
            kullanıcılarından ayırt etmek ilgi alanlarınıza ve tercihlerinize göre düzenleme yapmak için kullanılmaktadır.
            İstifa Et tarafından tasarlanmış çerezlerin yanı sıra üçüncü taraflardan alınan hizmetler kapsamında da çerez
            kullanılabilmektedir.</p>
          <p>Hemen hemen tüm internet tarayıcıları, çerezleri otomatik olarak kabul edecek şekilde
            ön tanımlıdır. Ancak çerezleri dilediğiniz gibi kontrol edebilir veya silebilirsiniz. Çerezleri yönetmek
            tarayıcıdan tarayıcıya farklılık gösterdiğinden ayrıntılı bilgi almak için tarayıcının yardım menüsüne
            bakılabilirsiniz.</p>
          <p>
            <strong>Çerez nedir?</strong></p>
          <p>Çerez, bir siteyi ziyaret ettiğinizde sitenin bilgisayarınıza veya mobil cihazınıza
            kaydettiği küçük boyutlu bir metin dosyasıdır. Çerezler bir web sitesinin çalışması veya daha verimli çalışması
            veya web sitesinin sahiplerine bilgi sağlamak için yaygın olarak kullanılmaktadır.</p>
          <p>
            <strong>Çerezleri nasıl kullanıyoruz?</strong></p>
          <p>Bilgisayarınıza yüklenen çerezler veya elde edilen bilgiler istatiksel analizler veya
            güvenlik önlemleri için kullanılmaktadır. Herhangi bir kişisel veriniz çerezler aracılığı ile
            toplanmamaktadır.</p>
          <p>
            <strong>Çerezleri nasıl kontrol edebilirsiniz?</strong></p>
          <p>Çerezleri dilediğiniz gibi kontrol edebilir veya silebilirsiniz. Bilgisayarınızda
            halihazırda bulunan çerezleri silebilir ve çoğu Internet gezgininde çerez kaydedilmesini/yerleştirilmesini
            engelleyebilirsiniz.</p>
          <p>
            <strong>Internet gezginindeki çerezleri nasıl yönetebilirsiniz?</strong></p>
          <p>Çoğu Internet gezgini aşağıdakileri yapmanıza olanak tanır: </p>
          <ul>
            <li>Kaydedilmiş çerezleri görüntüleme ve dilediklerinizi silme</li>
            <li>Üçüncü taraf çerezleri engelleme</li>
            <li>Belli sitelerden çerezleri engelleme</li>
            <li>Tüm çerezleri engelleme</li>
            <li>Internet gezginini kapattığınızda tüm çerezleri silme</li>
          </ul>
          <p>Çerezleri silmeyi tercih ederseniz ilgili web sitesindeki tercihleriniz silinecektir.
            Ayrıca, çerezleri tamamen engellemeyi tercih ederseniz İstifa Et’e ait web siteleri
            dahil olmak üzere birçok web sitesi düzgün çalışmayabilir.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <div slot="modal-footer" class="w-100 text-right">
      <b-btn variant="custom btn-outline-dark" data-dismiss="modal" @click="hideModal">
        {{ $t("close") }}
      </b-btn>
    </div>
  </b-modal>
</template>

<script>
export default {
  data () {
    return {
      modalOpts: null
    }
  },
  methods: {
    hideModal () {
      this.$refs.cookieModal.hide()
    }
  },
  created () {
    this.modalOpts = this.$store.getters.modalOpts
  }
}
</script>
