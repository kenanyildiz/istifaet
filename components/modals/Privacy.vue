<i18n>
  {
    "en": {
      "privacy_agreement": "Privacy Agreement"
    },
    "tr": {
      "privacy_agreement": "Gizlilik Sözleşmesi"
    }
  }
</i18n>

<template>
  <b-modal
    id="privacyModal"
    ref="privacyModal"
    :hide-header-close="true"
    :title="$t('privacy_agreement')"
    :header-bg-variant="modalOpts.headerBgVariant"
    :header-text-variant="modalOpts.headerTextVariant"
    :body-bg-variant="modalOpts.bodyBgVariant"
    :body-text-variant="modalOpts.bodyTextVariant"
    :footer-bg-variant="modalOpts.footerBgVariant"
    :footer-text-variant="modalOpts.footerTextVariant"
    size="lg">
    <b-container fluid>
      <b-row class="text-left">
        <b-col>
          <p class="content-summary">
            Aşağıdaki "Gizlilik Sözleşmesi", İstifa Et'in, siz değerli kullanıcılarımıza sağladığı bilgi ve hizmetlerin sunumuna ilişkin hükümleri düzenlemektedir. İş bu sözleşmede İstifa Et Web Sitesi "site", bu siteye her ne surette olursa olsun bilgi veren, kullanan, giriş yapanlar ve sair de "kullanıcı" olarak adlandırılacaktır. Siteye giren ya da sitedeki formları dolduran her kullanıcı, "Gizlilik Sözleşmesi" ve "Kullanım Şartları"nda yer alan hükümleri okumuş ve kabul etmiş sayılacaktır.
          </p>
          <p class="text-uppercase font-weight-bold">Gizlilik Sözleşmesi</p>
          <p>Sitemizi ziyaret eden kullanıcılardan topladığı bilgileri her türlü analiz yapmak amacıyla kullanabilir. İstifa Et bu bilgileri iş ortakları ile paylaşabilir. Ancak e-posta ve diğer kişisel bilgiler, hiçbir iş ortağı, şirket, kurum ya da başka bir kuruluşla kullanıcının izni olmaksızın paylaşılmayacaktır.</p>
          <p>İstifa Et kayıtlı ve misafir kullanıcılarına ait e-posta, adı, soyadı, telefon numarası ve kayıt sırasında girilen hiçbir bilgiyi Sitesinde yayınlamaz, kullanıcı aksini belirtmediyse hiçbir iş ortağı, şirket, kurum ya da diğer kuruluşla paylaşmaz.</p>
          <p>Sitemizde, isteyerek vermediğiniz takdirde, hakkınızda kişiyi tanımlayan bilgiler toplanmayacaktır (örneğin isim, adres, telefon numarası, ya da e-posta adresi) ("kişisel bilgi"). Eğer siteye kişisel bilgilerinizi verirseniz, İstifa Et bu bilgileri, gelecekte, pazarlama, pazar araştırması, satış bilgilerinin takibi ve size ulaşmak gibi amaçlarla kullanmak üzere saklayacaktır. Sizden talep edilmeyen kişisel bilgileri bize verdiğiniz takdirde, bu bilgileri bu sitede belirtilen şekilde kullanmamızı onaylamış olmaktasınız.</p>
          <p>İstifa Et kişisel bilgilerinizi sadece aşağıda belirtilen yasal durumlarda ve yasal prosedürler çerçevesinde 3. şahıslara açar.</p>
          <ul style="list-style-type: disc">
            <li>Yasal mercilerden bu yönde yazılı bir talep oluşması halinde</li>
            <li>İstifa Et'nin mülkiyet haklarını korumak ve savunmak amacıyla</li>
            <li>Kullanım şartlarında kabul ettiğiniz kurallar çerçevesinde</li>
          </ul>
          <br>
          <p>İstifa Et'de kayıtlı kişisel bilgileriniz sadece sizin tarafınızdan görüntülenebilir. Bu bilgiler hiçbir şekilde satılmaz, kiralanmaz ya da başka bir kurum ya da kuruluş ile karşılıklı değiştirilmez. Bu "Gizlilik Sözleşmesi" metninde yer alan maddeler haricinde hiçbir şekilde 3. şahıslarla paylaşılmaz. İstifa Et bu sözleşmede taahhüt ettiği şartları yerine getirmek için mümkün olan tüm önlemleri alır.</p>
          <p>İstifa Et tarafından toplanan bilgiler genel kullanıma açık olmayan güvenli bir ortamda saklanır. İstifa Et, ortamdaki bilgileri korumak için her türlü endüstri standardını kullanmaktadır. Ancak buna rağmen güvenlik ile ilgili konularda bir garanti verememektedir.</p>
          <p>Kayıt sırasında girdiğiniz kişisel bilgilerinizi istediğiniz her zaman güncelleme ve değiştirme hakkınız bulunmaktadır. İstifa Et bu "Gizlilik Sözleşmesi" ve "Kullanım Şartları"na uymadığınız takdirde üyeliğinizi silmeye ya da askıya almaya yetkilidir.</p>
          <p>İnternetin yapısı gereği bilgiler internet üzerinde yeterli güvenlik önlemleri olmaksızın dolaşabilir ve yetkili olmayan kişiler tarafından alınıp kullanılabilir. Bu kullanım ve kullanımdan doğacak zarar İstifa Et'nin sorumluluğunda değildir.</p>
          <p>Bazı durumlarda, şahsınıza özel olmayan bilgiler toplanabilir. Bu tip bilgilere örnek olarak kullandığınız internet browser'ın türü, işletim sisteminiz, sitemize linkle ya da ilanla ulaştığınız sitenin domain ismi verilebilir.</p>
          <p>Sitemizi ziyaret ettiğinizde bilgisayarınıza bilgi konulabilir. Bu bilgi, bilgi belirteci ("cookie") formatında ya da benzeri türden dosyada olacaktır ve bize birkaç yönden yardımcı olacaktır. Örneğin, cookie'ler, siteleri ve reklamları sizin ilgi alanlarınıza ve tercihlerinize göre düzenlememizi sağlayacaktır. Hemen hemen tüm internet browser'larda, cookie'leri hard diskinizden silmek, yazılmasını önlemek ya da kaydedilmeden önce uyarı mesajı almak için seçenekler vardır. Bu konuda daha fazla bilgi için lütfen browser'ınızın yardım dosyalarına ve kullanım bilgilerine bakınız.</p>
          <p>Bu Web Sitesi diğer web sitelerine link vermektedir. Gizlilik Sözleşmesi sadece bu Web Sitesi içerisinde geçerlidir ve diğer web sitelerini kapsamamaktadır. Bu web sitesinden link ile gidilecek diğer web sitelerindeki kullanım ile ilgili o sitelere ait Gizlilik Sözleşmesi ve Kullanım Şartları geçerlidir. Bu Web Sitesinden linkle gittiğiniz diğer web sitelerinde o sitelere ait Gizlilik Sözleşmesi ve Kullanım Şartları metinlerini bularak okumanız önerilir.</p>
          <p>İstifa Et bu metin içindeki her türlü bilgiyi değiştirme hakkını saklı tutar. Bu siteyi kullanarak bu "Gizlilik Sözleşmesi"nde yapılacak her türlü düzenleme ve değişiklik kullanıcı tarafından kabul edilmiş sayılır.</p>
        </b-col>
      </b-row>
    </b-container>
    <div
      slot="modal-footer"
      class="w-100 text-right">
      <b-btn
        variant="custom btn-outline-dark"
        data-dismiss="modal"
        @click="hideModal">
        {{ $t("close") }}
      </b-btn>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      modalOpts: null
    }
  },
  created() {
    this.modalOpts = this.$store.getters.modalOpts
  },
  methods: {
    hideModal() {
      this.$refs.privacyModal.hide()
    }
  }
}
</script>
