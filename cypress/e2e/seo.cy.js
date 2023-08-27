/// <reference types="cypress" />

describe("Basic Tags", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("sets the title", () => {
    cy.title().should("eq", "Francis York Morgan");
  });

  it("default title field is ignored", () => {
    cy.title().should("not.eq", "Tinker Tailor Soldier Spy");
  });

  it("sets the description", () => {
    cy.get('head meta[name="description"]').should(
      "have.attr",
      "content",
      "Agent"
    );
  });

  it("sets the charset", () => {
    cy.get('head meta[charset="utf-8"]').should(
      "have.attr",
      "charset",
      "UTF-8"
    );
  });

  it("sets canonical link", () => {
    cy.get('head link[rel="canonical"]').should("have.attr", "href", "Zach");
  });

  it("sets the basic Open Graph properties", () => {
    cy.get('head meta[property="og:title"]').should(
      "have.attr",
      "content",
      "Tinker Tailor Soldier & Spy"
    );
    cy.get('head meta[property="og:type"]').should(
      "have.attr",
      "content",
      "book"
    );
    cy.get('head meta[property="og:image"]').should(
      "have.attr",
      "content",
      "https://user-images.githubusercontent.com/5182256/131216951-8f74f425-f775-463d-a11b-0e01ad9fce8d.png"
    );
    cy.get('head meta[property="og:url"]').should(
      "have.attr",
      "content",
      "smiley"
    );
  });

  it("sets the optional Open Graph properties", () => {
    cy.get('head meta[property="og:audio"]').should(
      "have.attr",
      "content",
      "audio_link"
    );
    cy.get('head meta[property="og:description"]').should(
      "have.attr",
      "content",
      "optional description"
    );
    cy.get('head meta[property="og:determiner"]').should(
      "have.attr",
      "content",
      "an"
    );
    cy.get('head meta[property="og:locale"]').should(
      "have.attr",
      "content",
      "de_DE"
    );
    cy.get('head meta[property="og:locale:alternate"]').should(
      "have.attr",
      "content",
      "en_US"
    );
    cy.get('head meta[property="og:site_name"]').should(
      "have.attr",
      "content",
      "test"
    );
    cy.get('head meta[property="og:video"]').should(
      "have.attr",
      "content",
      "video_url"
    );
  });
});

describe("Basic Tags Without URL", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/ogBasicTagsWithoutUrl");
  });

  it("sets the Title, Type, and Image basic Open Graph properties", () => {
    cy.get('head meta[property="og:title"]').should(
      "have.attr",
      "content",
      "Tinker Tailor Soldier Spy"
    );
    cy.get('head meta[property="og:type"]').should(
      "have.attr",
      "content",
      "book"
    );
    cy.get('head meta[property="og:image"]').should(
      "have.attr",
      "content",
      "https://user-images.githubusercontent.com/5182256/131216951-8f74f425-f775-463d-a11b-0e01ad9fce8d.png"
    );
  });

  it("The Open Graph Url property defaults to Astro.request.url.href", () => {
    cy.get('head meta[property="og:url"]').should(
      "have.attr",
      "content",
      "http://localhost:3000/ogBasicTagsWithoutUrl"
    );
  });
});

describe("index & follow combinations", () => {
  it("applies correct defaults", () => {
    cy.visit("localhost:3000");
    cy.get('head meta[name="robots"]').should(
      "have.attr",
      "content",
      "index, follow"
    );
  });

  it("sets noindex correctly", () => {
    cy.visit("localhost:3000/noindex");
    cy.get('head meta[name="robots"]').should(
      "have.attr",
      "content",
      "noindex, follow"
    );
  });

  it("sets both noindex & nofollow correctly", () => {
    cy.visit("localhost:3000/noindexAndNofollow");
    cy.get('head meta[name="robots"]').should(
      "have.attr",
      "content",
      "noindex, nofollow"
    );
  });
});

describe("Open Graph image tags", () => {
  it("sets secure_url property", () => {
    cy.visit("localhost:3000/ogImageTags");
    cy.get('head meta[property="og:image:secure_url"]').should(
      "have.attr",
      "content",
      "open_graph_image_secure_url"
    );
  });

  it("sets mime type property", () => {
    cy.visit("localhost:3000/ogImageTags");
    cy.get('head meta[property="og:image:type"]').should(
      "have.attr",
      "content",
      "open_graph_image_mime_type"
    );
  });

  it("sets mime width property", () => {
    cy.visit("localhost:3000/ogImageTags");
    cy.get('head meta[property="og:image:width"]').should(
      "have.attr",
      "content",
      "500"
    );
  });

  it("sets mime height property (when it's 0)", () => {
    cy.visit("localhost:3000/ogImageTags");
    cy.get('head meta[property="og:image:height"]').should(
      "have.attr",
      "content",
      "1"
    );
  });

  it("sets alt property", () => {
    cy.visit("localhost:3000/ogImageTags");
    cy.get('head meta[property="og:image:alt"]').should(
      "have.attr",
      "content",
      "open_graph_image_alt"
    );
  });
});

describe("Open Graph article tags", () => {
  it("sets published_time property", () => {
    cy.visit("localhost:3000/ogArticleTags");
    cy.get('head meta[property="article:published_time"]').should(
      "have.attr",
      "content",
      "2021-09-22"
    );
  });

  it("sets modified_time property", () => {
    cy.visit("localhost:3000/ogArticleTags");
    cy.get('head meta[property="article:modified_time"]').should(
      "have.attr",
      "content",
      "2021-09-22"
    );
  });

  it("sets expiration_time property", () => {
    cy.visit("localhost:3000/ogArticleTags");
    cy.get('head meta[property="article:expiration_time"]').should(
      "have.attr",
      "content",
      "2021-09-22"
    );
  });

  it("sets authors properties", () => {
    cy.visit("localhost:3000/ogArticleTags");
    cy.get('head meta[property="article:author"]')
      .should("have.length", 2)
      .then((tags) => {
        expect(tags[0].content).to.equal("Smiley");
        expect(tags[1].content).to.equal("Control");
      });
  });

  it("sets section property", () => {
    cy.visit("localhost:3000/ogArticleTags");
    cy.get('head meta[property="article:section"]').should(
      "have.attr",
      "content",
      "Literature"
    );
  });

  it("sets tags properties", () => {
    cy.visit("localhost:3000/ogArticleTags");
    cy.get('head meta[property="article:tag"]')
      .should("have.length", 2)
      .then((tags) => {
        expect(tags[0].content).to.equal("Spy fiction");
        expect(tags[1].content).to.equal("Thriller");
      });
  });

  it("doesn't set empty author array", () => {
    cy.visit("localhost:3000/ogArticleTagsEmtpyArray");
    cy.get('head meta[property="article:author"]').should("have.length", 0);
  });

  it("doesn't set empty tag array", () => {
    cy.visit("localhost:3000/ogArticleTagsEmtpyArray");
    cy.get('head meta[property="article:tag"]').should("have.length", 0);
  });
});

describe("Twitter tags", () => {
  it("sets twitter:card tag", () => {
    cy.visit("localhost:3000/twitterTags");
    cy.get('head meta[name="twitter:card"]').should(
      "have.attr",
      "content",
      "summary_large_image"
    );
  });

  it("sets twitter:site tag", () => {
    cy.visit("localhost:3000/twitterTags");
    cy.get('head meta[name="twitter:site"]').should(
      "have.attr",
      "content",
      "@astrodotbuild"
    );
  });

  it("sets twitter:creator tag", () => {
    cy.visit("localhost:3000/twitterTags");
    cy.get('head meta[name="twitter:creator"]').should(
      "have.attr",
      "content",
      "@astrodotbuild"
    );
  });

  it("sets twitter:title tag", () => {
    cy.visit("localhost:3000/twitterTags");
    cy.get('head meta[name="twitter:title"]').should(
      "have.attr",
      "content",
      "Astro"
    );
  });

  it("sets twitter:description tag", () => {
    cy.visit("localhost:3000/twitterTags");
    cy.get('head meta[name="twitter:description"]').should(
      "have.attr",
      "content",
      "No JS. No pain."
    );
  });

  it("sets twitter:image tag", () => {
    cy.visit("localhost:3000/twitterTags");
    cy.get('head meta[name="twitter:image"]').should(
      "have.attr",
      "content",
      "url"
    );
  });

  it("sets twitter:image:alt tag", () => {
    cy.visit("localhost:3000/twitterTags");
    cy.get('head meta[name="twitter:image:alt"]').should(
      "have.attr",
      "content",
      "Image description."
    );
  });
});

describe("Extended tags", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/extendedTags");
  });

  it("sets favicon", () => {
    cy.get('head link[rel="icon"]').should("have.attr", "href", "/favicon.ico");
  });

  it("sets twitter:image tag", () => {
    cy.get('head meta[name="twitter:image"]').should(
      "have.attr",
      "content",
      "https://user-images.githubusercontent.com/5182256/131216951-8f74f425-f775-463d-a11b-0e01ad9fce8d.png"
    );
  });

  it("sets twitter:title tag", () => {
    cy.get('head meta[name="twitter:title"]').should(
      "have.attr",
      "content",
      "Tinker Tailor Soldier Spy"
    );
  });

  it("sets twitter:description tag", () => {
    cy.get('head meta[name="twitter:description"]').should(
      "have.attr",
      "content",
      "Agent"
    );
  });

  it("sets the media attribute when included", () => {
    cy.get('head meta[name="theme-color"]').should(
      "have.attr",
      "media",
      "(prefers-color-scheme: dark)"
    );
  });
});

describe("Extended link tags", () => {
  it("sets favicon", () => {
    cy.visit("localhost:3000/extendedLinkTags");
    cy.get('head link[rel="icon"]').should("have.attr", "href", "/favicon.ico");
    cy.get('head link[rel="icon"]').should("have.attr", "rel", "icon");
    cy.get('head link[rel="icon"]').should("have.attr", "type", "image/svg+xml");
  });
});

describe("Extended meta tags", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/extendedMetaTags");
  });

  it("sets twitter:image tag", () => {
    cy.get('head meta[name="twitter:image"]').should(
      "have.attr",
      "content",
      "https://user-images.githubusercontent.com/5182256/131216951-8f74f425-f775-463d-a11b-0e01ad9fce8d.png"
    );
  });

  it("sets twitter:title tag", () => {
    cy.get('head meta[name="twitter:title"]').should(
      "have.attr",
      "content",
      "Tinker Tailor Soldier Spy"
    );
  });

  it("sets twitter:description tag", () => {
    cy.get('head meta[name="twitter:description"]').should(
      "have.attr",
      "content",
      "Agent"
    );
  });
});

describe("Doesn't extend tags", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/extendedTagsEmptyArray");
  });

  it("doesn't extend link tags", () => {
    cy.get("head link:not([rel='canonical'])").should("not.exist");
  });

  it("doesn't extend meta tags", () => {
    cy.get(
      "head meta:not([charset], [name='viewport'], [name='description'], [name='robots'])"
    ).should("not.exist");
  });
});

describe("Default title", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/titleDefault");
  });

  it("default title is used", () => {
    cy.title().should("eq", "Default Tinker Tailor Soldier Spy");
  })
});

describe("Title template", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/titleTemplate");
  });

  it("title template is used", () => {
    cy.title().should("eq", "Home | Tinker Tailor Soldier Spy");
  })
});

describe("alternate languages", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/languageAlternates");
  });

  it('checks for two alternate links with href en and fr', function() {
    // Check for two link tags with rel=alternate
    cy.get('link[rel=alternate]').should('have.length', 2)

    // Check for a link tag with href=en
    cy.get('link[rel=alternate][hreflang="en"]').should('exist')
    cy.get('link[rel=alternate][href="localhost:3000/languageAlternates/en"]').should('exist')

    // Check for a link tag with href=fr
    cy.get('link[rel=alternate][hreflang="fr"]').should('exist')
    cy.get('link[rel=alternate][href="localhost:3000/languageAlternates/fr"]').should('exist')
  })
});

describe("url as URL object", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/urlAsURL");
  });

  it('checks if canonical is set correctly', function() {
    cy.get('head link[rel="canonical"]').should("have.attr", "href", "https://github.com/jonasmerlin/astro-seo");
  })
});