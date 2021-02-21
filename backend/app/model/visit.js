'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Visit = app.model.define('visit', {
    url: STRING(200),
    value: INTEGER,
  });

  Visit.logVisits = async function(url) {
    const [ visit ] = await this.findOrCreate({
      where: {
        url,
      },
      defaults: {
        url,
        value: 0,
      },
    });
    await visit.update({
      value: visit.value + 1,
    });
  };

  return Visit;
};
