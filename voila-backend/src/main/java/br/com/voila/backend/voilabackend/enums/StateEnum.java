package br.com.voila.backend.voilabackend.enums;

public enum StateEnum {
    ACRE(1),
    ALAGOAS(2),
    AMAPA(3),
    AMAZONAS(4),
    BAHIA(5),
    CEARA(6),
    DISTRITO_FEDERAL(7),
    ESPIRITO_SANTO(8),
    GOIAS(9),
    MARANHAO(10),
    MATO_GROSSO(11),
    MATO_GROSSO_SUL(12),
    MINAS_GERAIS(13),
    PARA(14),
    PARAIBA(15),
    PARANA(16),
    PERNAMBUCO(17),
    PIAUI(18),
    RIO_JANEIRO(19),
    RIO_GRANDE_NORTE(20),
    RIO_GRANDE_SUL(21),
    RONDONIA(22),
    RORAIRA(23),
    SANTA_CATARINA(24),
    SAO_PAULO(25),
    SERGIPE(26),
    TOCANTINS(27);

    private StateEnum(Integer code) {
        this.code = code;
    }

    public Integer code;
}
