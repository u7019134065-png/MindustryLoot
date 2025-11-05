// Автор: ЕЕее1405
// Версия: 1.3
// Тип: аддитивный буст скорости буров
// Не заменяет значения, а усиливает их в тысячи раз

Events.on(ClientLoadEvent, e => {
    Timer.schedule(() => {
        let boosted = 0;
        Vars.content.blocks().each(block => {
            try {
                // Проверяем, что блок действительно бур
                if (block.drillTime && block.tier && block.size > 0 && block.tier > 0) {

                    // Ускоряем добычу — уменьшаем время и усиливаем скорость
                    block.drillTime = Math.max(0.0001, block.drillTime / 9999);
                    block.drillSpeed *= 9999;
                    if (block.warmupSpeed) block.warmupSpeed *= 9999;

                    boosted++;
                }
            } catch (err) {
                Log.err("[InstantDrillBoost] Ошибка ускорения блока: " + block.name + " → " + err);
            }
        });
        Log.info("[InstantDrillBoost] Ускорено буров (x9999): " + boosted);
    }, 1);
});
