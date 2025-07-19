<script>
  window.addEventListener('DOMContentLoaded', () => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();

    document.getElementById('sendBtn').addEventListener('click', () => {
      tg.sendData(JSON.stringify({ action: 'clicked', user: tg.initDataUnsafe.user }));
    });
  });
</script>
