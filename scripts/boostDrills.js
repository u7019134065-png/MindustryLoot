// Автор: ЕЕее1405
// Версия: 1.0
// Ускоряет ВСЕ буры в игре, даже из других модов

Events.on(ContentInitEvent, () => {
    Vars.content.blocks().each(block => {
        // Проверяем, что блок умеет добывать
        if (block.drillTime > 0 || block.tier > 0) {
            block.drillTime = 0.0001; // моментальная добыча
            block.drillSpeed = 9999;  // ускорение
            block.warmupSpeed = 9999; // разгон
            block.update = true;
        }
    });
    Log.info("[InstantDrillBoost] Все буры ускорены в 9999 раз!");
});
