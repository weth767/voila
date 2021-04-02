package br.com.voila.backend.voilabackend.enums;

public enum StateEnum {
    ACRE(1),
    ALAGOAS(2),
    AMAZONAS(3),
    AMAPA(4),
    BAHIA(5),
    CEARA(6),
    DISTRITO_FEDERAL(7),
    ESPIRITO_SANTO(8),
    GOIAS(9),
    MARANHAO(10),
    MINAS_GERAIS(11),
    MATO_GROSSO_SUL(12),
    MATO_GROSSO(13),
    PARA(14),
    PARAIBA(15),
    PERNAMBUCO(16),
    PIAUI(17),
    PARANA(18),
    RIO_JANEIRO(19),
    RIO_GRANDE_NORTE(20),
    RONDONIA(21),
    RORAIRA(22),
    RIO_GRANDE_SUL(23),
    SANTA_CATARINA(24),
    SERGIPE(25),
    SAO_PAULO(26),
    TOCANTINS(27);

    private StateEnum(Integer code) {
        this.code = code;
    }

    public Integer code;
}
