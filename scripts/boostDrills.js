// Автор: ЕЕее1405
// Версия: 1.1
// Исправлено: вылет при старте из-за раннего вызова

Events.on(ClientLoadEvent, e => {
    Timer.schedule(() => {
        let boosted = 0;
        Vars.content.blocks().each(block => {
            try {
                if (block.drillTime > 0 || block.tier > 0) {
                    block.drillTime = 0.0001;
                    block.drillSpeed = 9999;
                    block.warmupSpeed = 9999;
                    boosted++;
                }
            } catch (err) {
                Log.err("[InstantDrillBoost] Ошибка при ускорении блока: " + block.name);
            }
        });
        Log.info("[InstantDrillBoost] Ускорено буров: " + boosted);
    }, 1); // ждём 1 секунду после загрузки клиента
});
